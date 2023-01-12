import type { NextApiRequest, NextApiResponse } from "next";
import getAllCars from "../../../dynamodb/functionCars/readAll"
import { AttributeValue } from "@aws-sdk/client-dynamodb";

function convertToJSON(i:Record<string,AttributeValue>) {
    const updatedObj: {[key: string]: string|undefined} ={}
    for (const [key, value] of Object.entries(i)) {
        if(value){
            updatedObj[key] = value["S"]
        }
    }
    return updatedObj
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const cars = await getAllCars()
    
    const carsJSON = await cars?.map((e)=>convertToJSON(e))
  res.status(200).json(carsJSON);
}