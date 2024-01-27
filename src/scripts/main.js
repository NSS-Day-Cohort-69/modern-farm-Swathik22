import { createPlan } from "./plan.js";
import { addPlant,usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

// const asparagusSeed = createAsparagus()
// const cornSeed=createCorn()
// const potatoSeed=createPotato()
// const soybeanSeed=createSoybean()
// const sunflowerSeed=createSunflower()
// const wheatSeed=createWheat()

// console.log(asparagusSeed)
// console.log(cornSeed)
// console.log(potatoSeed)
// console.log(soybeanSeed)
// console.log(sunflowerSeed)
// console.log(wheatSeed)

// addPlant(cornSeed);

//const fieldPlantsAdd=usePlants();
const yearlyPlan=createPlan();//1-step

plantSeeds(yearlyPlan)//2-step

const foodList=harvestPlants(usePlants());//3-step

let foodReadyForSale=catalog(foodList);//4-step


const foodContainerElement=document.querySelector(".container")//5-step
foodContainerElement.innerHTML=foodReadyForSale;


// console.log("Welcome to the main module")
// console.log(yearlyPlan)


// console.log(fieldPlantsAdd)

