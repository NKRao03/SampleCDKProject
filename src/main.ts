import { App, Stack, StackProps } from "aws-cdk-lib";
import {
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  KeyPair,
  MachineImage,
  Peer,
  Port,
  SecurityGroup,
  SubnetType,
  UserData,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import fs from "fs";

export class myEC2Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //Creating a VPC
    const vpc = new Vpc(this, "default-vpc", {
      cidr: "10.0.0.0/16",
      maxAzs: 1,
      subnetConfiguration: [{ name: "public", subnetType: SubnetType.PUBLIC }],
    });

    //Add a security group
    const security_grp = new SecurityGroup(this, "default-sg", {
      vpc,
      allowAllOutbound: true,
    });
    //Ingress RUles
    security_grp.addIngressRule(Peer.anyIpv4(), Port.tcp(22), "SSH Access");
    security_grp.addIngressRule(Peer.anyIpv4(), Port.tcp(80), "HTTP Access");

    //Read public key from localmachine
    const publicKey = fs.readFileSync(`${process.env.HOME}/.ssh/ec2keys.pub`);
    //Keypair
    const keyP = new KeyPair(this, "ec2keys", {
      publicKeyMaterial: String(publicKey),
    });

    //Create a Role for EC2 instance
    const ec2role = new Role(this, "ec2-role", {
      assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName("AmazonEC2FullAccess"),
      ],
    });

    //Read script content
    const sciptContent = fs.readFileSync(`${__dirname}/script.sh`, "utf-8");

    //Create an EC2 instance
    const ec2Instance = new Instance(this, "default-ec2", {
      vpc: vpc,
      vpcSubnets: {
        subnetType: SubnetType.PUBLIC,
      },
      securityGroup: security_grp,
      role: ec2role,
      keyPair: keyP,
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      machineImage: MachineImage.latestAmazonLinux2(),
      userData: UserData.custom(sciptContent),
    });

    console.log(`Public IP:`, ec2Instance.instancePublicIp);
    console.log(`Private IP:`, ec2Instance.instancePrivateIp);
    console.log(`EC2 ARN:`, ec2Instance.instanceId);
    console.log(`VPC ARN:`, vpc.vpcArn);
  }
}

//Instantiate the stack
const app = new App();
new myEC2Stack(app, "MyEC2Stack");
app.synth();