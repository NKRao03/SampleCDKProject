import { join } from 'path';
import { App, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Code, Runtime, Function } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    // define resources here...
    // Creating a DynamoDB Table
    const table = new Table(this, 'dynamic-dynamo' , {
      partitionKey: {name : "id" , type: AttributeType.STRING},
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    })

    const handlerFunction = new Function(this, "Quotes-Function", {
      runtime: Runtime.NODEJS_16_X,
      memorySize: 512,
      code: Code.fromAsset(join(__dirname, "./lambdas")),
      handler: "app.DBHandler",
      environment: {
        MY_TABLE: table.tableName
      }
    });


    //Granting RW permission to Lambda for table
    table.grantReadWriteData(handlerFunction);

    //Defining a REST API
    let api = new RestApi(this, 'quotes-api', {
      description: 'quotes API',
    });

    let mainPath = api.root.addResource('quotes');
    mainPath.addMethod('GET', new LambdaIntegration(handlerFunction));
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

// const app = new App();

// new MyStack(app, 'CDK-dev', { env: devEnv });
// // new MyStack(app, 'CDK-prod', { env: prodEnv });

// app.synth();
