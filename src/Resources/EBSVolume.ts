import { RemovalPolicy, Size, CfnOutput } from "aws-cdk-lib";
import { Volume } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
// export interface ebsContructProps {}
export class ebsContruct extends Construct {
  public readonly ebsvol: Volume;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    //create a new EBS volume
    this.ebsvol = new Volume(this, "ebsvolume", {
      availabilityZone: process.env.CDK_DEFAULT_REGION! + "a",
      removalPolicy: RemovalPolicy.DESTROY,
      size: Size.gibibytes(3),
    });
    console.log(`Volime ARN is: ${this.ebsvol.volumeId}`);

    //Output the VolumeID
    new CfnOutput(this, "VolumeIdOutput", {
      value: this.ebsvol.volumeId,
      description: "Volume ID of the EBS Volume",
      exportName: "EBSVolumeID",
    });
  }
}
