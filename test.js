import { DynamoDBClient,GetItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "./dynamodb/connection.js";
const ddbClient = new DynamoDBClient(awsConfig);

async function getUserByEmail(){
    const params = {
        TableName:'sherlockationUsers',
        Key:{
            email:{S:"user@useremail.com"}
        }
    }
    try {
        const data = await ddbClient.send(new GetItemCommand(params))
        console.log(data.Item);
    } catch (err) {
        console.log(err);
    }
}
getUserByEmail()

