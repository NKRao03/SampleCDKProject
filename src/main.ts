import { App, Stack, StackProps } from "aws-cdk-lib";
import {
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  KeyPair,
  MachineImage,
  SubnetType,
  UserData,
} from "aws-cdk-lib/aws-ec2";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import fs from "fs";
import { SecurityGroupStack } from "./Resources/SecurityGroup";

export class myEC2Stack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    //Add a security group, Importing a VPC
    const { security_grp, defaultvpc } = new SecurityGroupStack(
      this,
      "new-sec-grp"
    );

    //Read public key from localmachine
    const publicKey = fs.readFileSync(`${process.env.HOME}/.ssh/ec2keys.pub`);
    //Keypair
    const keyP = new KeyPair(this, "ec2keys", {
      publicKeyMaterial: String(publicKey),
    });

    //Create an EBS Volume
    // const { ebsvol } = new ebsContruct(this, "new-ebsvol");
    // console.log(ebsvol.volumeId);
    //Import VolumeID
    // const EBSVolumeID = Fn.importValue("EBSVolumeID");
    // console.log(EBSVolumeID);

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
      vpc: defaultvpc.vpc,
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

    //Attach EBS volume to EC2 instance

    // const ec2Clinet = new EC2();
    // ec2Clinet.attachVolume({
    //   VolumeId: EBSVolumeID,
    //   InstanceId: ec2Instance.instanceId,
    //   Device: '/dev/sdh',
    // }, (err: Error, _data: any) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   else {
    //     console.log("Volume attached successfully!");
    //   }
    // })

    // new CfnVolumeAttachment(this, "volumeattachment", {
    //   volumeId: EBSVolumeID,
    //   instanceId: ec2Instance.instanceId,
    //   device: "/dev/sdh",
    // });

    console.log(`Public IP:`, ec2Instance.instancePublicIp);
    console.log(`Private IP:`, ec2Instance.instancePrivateIp);
    console.log(`EC2 ARN:`, ec2Instance.instanceId);
  }
}

//Instantiate the stack
const app = new App();
new myEC2Stack(app, "MyEC2Stack");
app.synth();
