import { DynamoDBClient,DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection";
const ddbClient = new DynamoDBClient(awsConfig);

async function deleteUserByEmail(email){
    const params = {
        TableName:'sherlockationUsers',
        Key:{
            email:{S:email}
        }
    }
        const data = await ddbClient.send(new DeleteItemCommand(params))
        console.log(data);
}

export default deleteUserByEmail;