export const catalog=(harvestedFoodArray)=>{
    let foodItemHTML=``;
    for(const food of harvestedFoodArray)
    {
        foodItemHTML+=`<section class="plant">${food.type}</section>`
    }
    return foodItemHTML;
}