import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

const harvestedFood=[];

const harvestPlantLoop=(plantObject)=>{    
    if(plantObject.type==="Corn")  
    {
        for(let i=0;i<(plantObject.output)/2;i++)
        {
            harvestedFood.push(plantObject)
        }
    } 
    else{
        for(let i=0;i<plantObject.output;i++){
            harvestedFood.push(plantObject)         
        } 
    }
}

export const harvestPlants =(plantsToHarvest)=>{ 
    for(const plant of plantsToHarvest)
    {        
        switch(plant.type){
            case "Asparagus":
            {
                //const asparagusPlant= createAsparagus();
                harvestPlantLoop(plant);
                break;
            }   
            case "Corn":
            {
                //const cornPlant=createCorn();
                harvestPlantLoop(plant);
                break;
            }          
            case "Potato":
            {
                //const potatoPlant=createPotato();
                harvestPlantLoop(plant);
                break;
            }
            case "Soybean":
            {
                //const soybeanPlant=createSoybean();
                harvestPlantLoop(plant);
                break;
            }
            case "Sunflower":
            {
                //const sunflowerPlant=createSunflower();
                harvestPlantLoop(plant);
                break;
            }
            case "Wheat":
            {
                //const wheatPlant=createWheat();
                harvestPlantLoop(plant);
                break;
            }
            default:break;            
            }
        
    }
    return harvestedFood;
}