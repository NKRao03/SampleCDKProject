import { App, Stack, StackProps } from "aws-cdk-lib";
import {
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  MachineImage,
  Peer,
  Port,
  SecurityGroup,
  SubnetType,
  UserData,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
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
    security_grp.addEgressRule(Peer.anyIpv4(), Port.tcp(80), "HTTP Access");

    //Read script content
    const sciptContent = fs.readFileSync(`${__dirname}/script.sh`, "utf-8");

    //Create an EC2 instance
    const myEC2Stack = new Instance(this, "default-ec2", {
      vpc: vpc,
      instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
      machineImage: MachineImage.latestAmazonLinux2(),
      userData: UserData.custom(sciptContent),
    });

    console.log(`Public IP:`, myEC2Stack.instancePublicIp);
    console.log(`Private IP:`, myEC2Stack.instancePrivateIp);

    console.log(`EC2 ARN:`, myEC2Stack.instanceId);
    console.log(`VPC ARN:`, vpc.vpcArn);
  }
}

//Instantiate the stack
const app = new App();
new myEC2Stack(app, "MyEC2Stack");
app.synth();
