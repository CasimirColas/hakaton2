import { DynamoDBClient,ScanCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection.js";
const ddbClient = new DynamoDBClient(awsConfig);

async function getAllCars(){
    const params = {
        TableName:'sherlockationCars',
    }
 const cars = await ddbClient.send(new ScanCommand(params))
    return cars.Items
}

export default getAllCars;