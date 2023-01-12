import { DynamoDBClient,PutItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection";
import highestCardId from "./highestCardId";

const ddbClient = new DynamoDBClient(awsConfig);

async function createItem(i){
    const id = await highestCardId()
    const item = {id:{S:id}}
    for (const [key, value] of Object.entries(i)) {
        item[key] = {S:value}
    }
    return item
  }

async function putNewCar(obj){
    const items = await createItem(obj)
    const params = {
        TableName:'sherlockationCars',
        Item: items
    }
       const data = await ddbClient.send(new PutItemCommand(params))
       console.log(data);
}

export default putNewCar;