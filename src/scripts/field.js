const fieldPlants=[];//plants array

export const addPlant=(seedObject)=>{
    if(Array.isArray(seedObject))
    {
        for(const seed of seedObject){
            fieldPlants.push(seed)        
        }
    }
    else{
        fieldPlants.push(seedObject)
    }
   // return fieldPlants;
}

export const usePlants=()=>{
    return fieldPlants;
}