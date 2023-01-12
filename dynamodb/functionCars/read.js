import { DynamoDBClient,GetItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection.js";
const ddbClient = new DynamoDBClient(awsConfig);

async function getCarById(id){
    const strId = await id.toString()
    const params = {
        TableName:'sherlockationCars',
        Key:{
            id:{S:strId}
        }
    }
        const data = await ddbClient.send(new GetItemCommand(params))
        return data.Item
}

export default getCarById;