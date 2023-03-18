import { MealDetails } from "./mealDetails.js";
export class MealByLetter{

    getMealName(mealSearchName) {
        console.log(mealSearchName);
        async function getSearchMeals() {
          let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealSearchName}`);
          let finalRes= await res.json()
          console.log(finalRes);
          displayMeal(finalRes)
}
getSearchMeals(mealSearchName)

function displayMeal(finalRes){
    let mealNames = new Map(Object.entries(finalRes));
    let [value] = mealNames;
    let mealTotal = value[1];
    var cartona =``
    for (let i = 0; i < mealTotal.length; i++) {
    cartona+=`
    <div class="col-md-3">
    <div class="item position-relative ">
        <img src="${mealTotal[i].strMealThumb}" class="img-fluid rounded-3" alt="">
        <div class="item-layer item-part position-absolute d-flex align-items-center ps-1  rounded-3" data-meal="${mealTotal[i].strMeal}">
            <div class="MealName" data-meal="${mealTotal[i].strMeal}">${mealTotal[i].strMeal}</div>
        </div>
    </div>
</div>
    `

    }
    document.getElementById("searchMeal").innerHTML=cartona
    $(".item-part").click(function (e) {

        for (let i = 0; i < mealTotal.length; i++) {
            if (mealTotal[i].strMeal === e.target.getAttribute("data-meal")) {
                let mealId = mealTotal[i].idMeal;
                let mealObj = new MealDetails(mealId);
                mealObj.getMealId(mealId);
              }
        }
        $("#home").css("display", "none");
        $("#searchPage").css("display", "none");
        $("#mealDetails").removeClass("d-none");
        
        

        })
}
    }
}

