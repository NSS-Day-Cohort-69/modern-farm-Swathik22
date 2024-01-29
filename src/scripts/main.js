import { createPlan } from "./plan.js";
import { addPlant,usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

//step -1 Creating an Yearly planting plan and getting seeds
const yearlyPlan=createPlan();

//step -2 Planting the seeds in the field
plantSeeds(yearlyPlan)

//step -3 Get the harvested food
const foodList=harvestPlants(usePlants());

//step -4 Get the harvested food for sale
let foodReadyForSale=catalog(foodList);

//step -5 Throwing on to the browser
const foodContainerElement=document.querySelector(".container")
foodContainerElement.innerHTML=foodReadyForSale;


