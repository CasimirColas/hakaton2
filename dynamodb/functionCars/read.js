import { DynamoDBClient,ScanCommand,GetItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection.js";
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
async function getCarByCompanyName(name){
        const params = {
            TableName:'sherlockationCars',
            FilterExpression: "companyName = :name",
            ExpressionAttributeValues: {
                ":name": { S: name },
              },
        }
     const cars = await ddbClient.send(new ScanCommand(params))
        return cars.Items
    }


export  {getCarById,getCarByCompanyName};