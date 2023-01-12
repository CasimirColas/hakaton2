import { DynamoDBClient,PutItemCommand } from "@aws-sdk/client-dynamodb";
import awsConfig from "../connection";
import getUserByEmail from "./read";
const ddbClient = new DynamoDBClient(awsConfig);

async function putNewUserEmailPassRole(email,password,role){

    const params = {
        TableName:'sherlockationUsers',
        Item: {
            email: { S: email },
            password: { S: password },
            role: {S:role}
            },
    }
        const potentialUser = await getUserByEmail(email)
        if(potentialUser){
            throw new Error("User already exists");           
        }else{
        ddbClient.send(new PutItemCommand(params))
        }

        
}

export default putNewUserEmailPassRole;