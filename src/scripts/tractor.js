import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

// const plantingPlanArray=
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]

export const plantSeeds=(yearPlantingPlan)=>{
    for(const planRow of yearPlantingPlan){
        for(const plan of planRow){
            switch(plan){
            case "Asparagus":
            {
                addPlant(createAsparagus());
                break;
            }
            case "Corn":
            {
                addPlant(createCorn());
                break;
            }
            case "Potato":
            {
                addPlant(createPotato());
                break;
            }
            case "Soybean":
            {
                addPlant(createSoybean());
                break;
            }
            case "Sunflower":
            {
                addPlant(createSunflower());
                break;
            }
            case "Wheat":
            {
                addPlant(createWheat());
                break;
            }
            default:break;            
            }
        }
        
    }
}



