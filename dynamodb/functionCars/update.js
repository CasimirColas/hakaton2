import { DynamoDBClient,UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import {getCarById} from "./read.js";
import awsConfig from "../connection.js";
const ddbClient = new DynamoDBClient(awsConfig);

async function addParams(i){
    let updateString = "set "
    const updatedObj = {}
    for (const [key, value] of Object.entries(i)) {
      updateString = updateString.concat(`${key} = :${key},`)
      updatedObj[`:${key}`] = {S:value}
    }
    return {string:updateString.slice(0, -1),obj: updatedObj}
  }
  
  async function updateCar(id,toBeUpdated){
  
  const modifs = await addParams(toBeUpdated)
  const params = {
      TableName: "sherlockationCars",
      Key: {
          id: {S:id},
      },
      // Define expressions for the new or updated attributes
      UpdateExpression: modifs.string, // For example, "'set Title = :t, Subtitle = :s'"
      ExpressionAttributeValues: modifs.obj,
      ReturnValues: "ALL_NEW"
  };
          const potentialCar = await getCarById(id)
          if(!potentialCar){
              throw new Error("Car doesn't exist");           
          }
          const data = await ddbClient.send(new UpdateItemCommand(params))
          console.log(data);
  }

export default updateCar;