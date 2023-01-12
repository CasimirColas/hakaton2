import type { NextApiRequest, NextApiResponse } from "next";
import { AttributeValue } from "@aws-sdk/client-dynamodb";
import getCarById from "../../../dynamodb/functionCars/read"

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
    const {id} =req.query
    const car = await getCarById(id)
    if(car){
        const resJSON = await convertToJSON(car)
        res.status(200).json(resJSON);
    }else{
        res.status(404).json("This car is not the data base");
    }
  
}