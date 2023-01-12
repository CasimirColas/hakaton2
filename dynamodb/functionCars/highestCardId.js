import getAllCars from "./readAll"

async function convertToJSON(i) {
    const updatedObj={}
    for (const [key, value] of Object.entries(i)) {
        if(value){
            updatedObj[key] = value["S"]
        }
    }
    return updatedObj
}

async function failSafe(tab) {
    let id = 1
    for await(const i of tab){
        if(i.id>id){
            id = i.id
        }
    }
        return Number(id)+1
}

async function highestCardId(){
    const allCars = await getAllCars()
    const allCarsJSON = await allCars.map((e)=>convertToJSON(e))
    const newId = await failSafe(allCarsJSON)

    return newId.toString()
}
export default highestCardId;