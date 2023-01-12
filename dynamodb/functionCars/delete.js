import { DynamoDBClient,DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection";
const ddbClient = new DynamoDBClient(awsConfig);

async function deleteCarById(id){
    const params = {
        TableName:'sherlockationCars',
        Key:{
            id:{S:id}
        }
    }
        const data = await ddbClient.send(new DeleteItemCommand(params))
        console.log(data);
}

export default deleteCarById;