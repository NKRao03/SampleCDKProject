import { Stack, StackProps } from "aws-cdk-lib";
import { Vpc, SubnetType } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class VpcStack extends Stack {
  public vpc: Vpc;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new Vpc(this, "default-vpc", {
      cidr: "10.0.0.0/16",
      maxAzs: 1,
      subnetConfiguration: [{ name: "public", subnetType: SubnetType.PUBLIC }],
    });

    // new CfnOutput(this, "VPCIDOutput", {
    //   value: this.vpc.vpcId,
    //   description: "VPC ID of the VPC",
    //   exportName: "VPCID",
    // });
  }
}
