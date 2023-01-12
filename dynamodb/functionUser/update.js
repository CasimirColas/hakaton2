import { DynamoDBClient,UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import getUserByEmail from "./read.js";
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
  
  async function updateUser(email,toBeUpdated){
  
  const modifs = await addParams(toBeUpdated)
   console.log(modifs.string);
  const params = {
      TableName: "sherlockationUsers",
      Key: {
          email: {S:email},
      },
      // Define expressions for the new or updated attributes
      UpdateExpression: modifs.string, // For example, "'set Title = :t, Subtitle = :s'"
      ExpressionAttributeValues: modifs.obj,
      ReturnValues: "ALL_NEW"
  };
          const potentialUser = await getUserByEmail(email)
          if(!potentialUser){
              throw new Error("User doesn't exist");           
          }
          const data = await ddbClient.send(new UpdateItemCommand(params))
          console.log(data);
          
  }

export default updateUser;