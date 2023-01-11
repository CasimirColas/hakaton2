import { DynamoDBClient,GetItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection";
const ddbClient = new DynamoDBClient(awsConfig);

async function getUserByEmail(email:string){
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