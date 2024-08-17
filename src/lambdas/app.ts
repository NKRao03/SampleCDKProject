const AWS = require("aws-sdk");

let dynamo = new AWS.DynamoDB.DocumentClient();
const MY_TABLE = process.env.MY_TABLE;

export async function DBHandler(event, context) {
  console.log("EVENT:::", event);
  return new Promise((resolve, reject) => {
    resolve({
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Hi Mom!" }),
    });
  });
}
