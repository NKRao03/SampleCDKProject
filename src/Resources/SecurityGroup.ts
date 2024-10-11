import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Peer, Port, SecurityGroup } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { VpcStack } from "./Vpc";
export class SecurityGroupStack extends Stack {
  public security_grp: SecurityGroup;
  public defaultvpc: VpcStack;
  constructor(scope: Construct, Id: string, props?: StackProps) {
    super(scope, Id, props);

    //Creating a VPC
    this.defaultvpc = new VpcStack(this, "defvpc");

    this.security_grp = new SecurityGroup(this, "default-sg", {
      vpc: this.defaultvpc.vpc,
      allowAllOutbound: true,
    });
    //Ingress RUles
    this.security_grp.addIngressRule(
      Peer.anyIpv4(),
      Port.tcp(22),
      "SSH Access"
    );
    this.security_grp.addIngressRule(
      Peer.anyIpv4(),
      Port.tcp(80),
      "HTTP Access"
    );

    //Output the SecurityGroupID
    new CfnOutput(this, "SecurityGroupIDOutput", {
      value: this.security_grp.securityGroupId,
      description: "Security Group ID of the EBS Volume",
      exportName: "SecurityGroupID",
    });
  }
}
