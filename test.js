import { DynamoDBClient,UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "./dynamodb/connection.js";
import getUserByEmail from "./dynamodb/function/read.js"
const ddbClient = new DynamoDBClient(awsConfig);

async function updateUser(email,toBeUpdated){
function addParams(i){
  let updateString = "set "
  const updatedObj = {}
  for (const [key, value] of Object.entries(i)) {
    updateString = updateString.concat(`${key} = :${key},`)
    updatedObj[`:${key}`] = value
  }
  return [updateString.slice(0, -1), updatedObj]
}
const modifs = addParams(toBeUpdated)
const params = {
    TableName: "sherlockationUsers",
    Key: {
        primaryKey: {S:email},
    },
    // Define expressions for the new or updated attributes
    UpdateExpression: modifs[0], // For example, "'set Title = :t, Subtitle = :s'"
    ExpressionAttributeValues: modifs[1],
    ReturnValues: "ALL_NEW"
};
        const potentialUser = await getUserByEmail(email)
        if(!potentialUser){
            throw new Error("User doesn't exist");           
        }
        const data = await ddbClient.send(new UpdateItemCommand(params))
        console.log(data);
        
}
updateUser("admin@adminemail.com",{password:"2admin"})


