import { DynamoDBClient,GetItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "./dynamodb/connection.js";
import getUserByEmail from "./dynamodb/functionUser/read.js"
const ddbClient = new DynamoDBClient(awsConfig);


async function getCarById(id){
  const params = {
    TableName:'sherlockationCars',
    Key:{
        id:{S:id}
    }
}
    const data = await ddbClient.send(new GetItemCommand(params))
    return data.Item
}
getCarById("1")


