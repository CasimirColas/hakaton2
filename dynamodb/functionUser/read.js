import { DynamoDBClient,GetItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection.js";
const ddbClient = new DynamoDBClient(awsConfig);

async function getUserByEmail(email){
    const params = {
        TableName:'sherlockationUsers',
        Key:{
            email:{S:email}
        }
    }
        const data = await ddbClient.send(new GetItemCommand(params))
        return data.Item
}

export default getUserByEmail;