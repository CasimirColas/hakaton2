import { DynamoDBClient,ScanCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection.js";
const ddbClient = new DynamoDBClient(awsConfig);

async function getAllUsers(){
    const params = {
        TableName:'sherlockationUsers',
    }
 const users = await ddbClient.send(new ScanCommand(params))
    return users.Items
}

export default getAllUsers;