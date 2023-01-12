import { DynamoDBClient,PutItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection";
import getUserByEmail from "./read";
const ddbClient = new DynamoDBClient(awsConfig);

async function createItem(email,i){
    const item = {email:{S:email}}
    for (const [key, value] of Object.entries(i)) {
        item[key] = {S:value}
    }
    return item
  }

async function putNewUserEmail(email,obj){
    const items = await createItem(email,obj)
    const params = {
        TableName:'sherlockationUsers',
        Item: items,
    }
        const potentialUser = await getUserByEmail(email)
        if(potentialUser){
            return "User already exists"
        }else{
        ddbClient.send(new PutItemCommand(params))
        }

        
}

export default putNewUserEmail;