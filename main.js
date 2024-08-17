"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStack = void 0;
const path_1 = require("path");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_apigateway_1 = require("aws-cdk-lib/aws-apigateway");
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
class MyStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // define resources here...
        const handlerFunction = new aws_lambda_1.Function(this, 'HelloFunction', {
            runtime: aws_lambda_1.Runtime.NODEJS_LATEST,
            memorySize: 512,
            handler: 'quotes.quotesHandler',
            code: aws_lambda_1.Code.fromAsset((0, path_1.join)(__dirname, './lambdas')),
        });
        //Defining a REST API
        let api = new aws_apigateway_1.RestApi(this, 'quotes-api', {
            description: 'quotes API',
        });
        let mainPath = api.root.addResource('quotes');
        mainPath.addMethod('GET', new aws_apigateway_1.LambdaIntegration(handlerFunction));
    }
}
exports.MyStack = MyStack;
// for development, use account/region from cdk cli
const devEnv = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};
const app = new aws_cdk_lib_1.App();
new MyStack(app, 'CDK-dev', { env: devEnv });
// new MyStack(app, 'CDK-prod', { env: prodEnv });
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUE0QjtBQUM1Qiw2Q0FBcUQ7QUFDckQsK0RBQXdFO0FBQ3hFLHVEQUFpRTtBQUdqRSxNQUFhLE9BQVEsU0FBUSxtQkFBSztJQUNoQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLDJCQUEyQjtRQUMzQixNQUFNLGVBQWUsR0FBRyxJQUFJLHFCQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUMxRCxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxhQUFhO1lBQzlCLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixJQUFJLEVBQUUsaUJBQUksQ0FBQyxTQUFTLENBQ2xCLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FDN0I7U0FDRixDQUFDLENBQUM7UUFFSCxxQkFBcUI7UUFDckIsSUFBSSxHQUFHLEdBQUcsSUFBSSx3QkFBTyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDeEMsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxrQ0FBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRjtBQXJCRCwwQkFxQkM7QUFFRCxtREFBbUQ7QUFDbkQsTUFBTSxNQUFNLEdBQUc7SUFDYixPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7SUFDeEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0NBQ3ZDLENBQUM7QUFFRixNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLEVBQUUsQ0FBQztBQUV0QixJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDN0Msa0RBQWtEO0FBRWxELEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IEFwcCwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBMYW1iZGFJbnRlZ3JhdGlvbiwgUmVzdEFwaSB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCB7IENvZGUsIFJ1bnRpbWUsIEZ1bmN0aW9uIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcblxuZXhwb3J0IGNsYXNzIE15U3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIC8vIGRlZmluZSByZXNvdXJjZXMgaGVyZS4uLlxuICAgIGNvbnN0IGhhbmRsZXJGdW5jdGlvbiA9IG5ldyBGdW5jdGlvbih0aGlzLCAnSGVsbG9GdW5jdGlvbicsIHtcbiAgICAgIHJ1bnRpbWU6IFJ1bnRpbWUuTk9ERUpTX0xBVEVTVCxcbiAgICAgIG1lbW9yeVNpemU6IDUxMixcbiAgICAgIGhhbmRsZXI6ICdxdW90ZXMucXVvdGVzSGFuZGxlcicsXG4gICAgICBjb2RlOiBDb2RlLmZyb21Bc3NldChcbiAgICAgICAgam9pbihfX2Rpcm5hbWUsICcuL2xhbWJkYXMnKSxcbiAgICAgICksXG4gICAgfSk7XG5cbiAgICAvL0RlZmluaW5nIGEgUkVTVCBBUElcbiAgICBsZXQgYXBpID0gbmV3IFJlc3RBcGkodGhpcywgJ3F1b3Rlcy1hcGknLCB7XG4gICAgICBkZXNjcmlwdGlvbjogJ3F1b3RlcyBBUEknLFxuICAgIH0pO1xuXG4gICAgbGV0IG1haW5QYXRoID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3F1b3RlcycpO1xuICAgIG1haW5QYXRoLmFkZE1ldGhvZCgnR0VUJywgbmV3IExhbWJkYUludGVncmF0aW9uKGhhbmRsZXJGdW5jdGlvbikpO1xuICB9XG59XG5cbi8vIGZvciBkZXZlbG9wbWVudCwgdXNlIGFjY291bnQvcmVnaW9uIGZyb20gY2RrIGNsaVxuY29uc3QgZGV2RW52ID0ge1xuICBhY2NvdW50OiBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9BQ0NPVU5ULFxuICByZWdpb246IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX1JFR0lPTixcbn07XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxubmV3IE15U3RhY2soYXBwLCAnQ0RLLWRldicsIHsgZW52OiBkZXZFbnYgfSk7XG4vLyBuZXcgTXlTdGFjayhhcHAsICdDREstcHJvZCcsIHsgZW52OiBwcm9kRW52IH0pO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==