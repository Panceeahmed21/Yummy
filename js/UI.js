import { MealDetails } from "./mealDetails.js";

export class MainMeals {
  getMeals() {
    async function getRandomMeals() {
      let res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      let mealList = await res.json();

      displayMeals(mealList);
    }
    getRandomMeals();

    function displayMeals(mealList) {
      let mealNames = new Map(Object.entries(mealList));
      let [value] = mealNames;
      let mealTotal = value[1];
      var mealNameInclude;
      var cartona = ``;

      for (var i = 0; i < mealTotal.length; i++) {
        mealNameInclude = mealTotal[i].strMeal;
        cartona += ` <div class="col-md-3  ">
<div class="item position-relative  ">
    <img src="${mealTotal[i].strMealThumb}" class="img-fluid rounded-3" alt="">
    <div class="item-layer position-absolute d-flex align-items-center ps-1  rounded-3" data-MealName="${mealTotal[i].strMeal}">
        <div class="MealName" data-MealName="${mealTotal[i].strMeal}">${mealTotal[i].strMeal}</div>
    </div>
</div>
</div>`;
      }

      document.getElementById("mealRandom").innerHTML = cartona;
      $(".item-layer").click(function (e) {
        for (let i = 0; i < mealTotal.length; i++) {

          if (mealTotal[i].strMeal === e.target.getAttribute("data-MealName")) {
            let mealId = mealTotal[i].idMeal;

            let mealObj = new MealDetails(mealId);
            mealObj.getMealId(mealId);
          }
        }
        $("#home").css("display", "none");
        $("#mealDetails").removeClass("d-none");
      });
    }
  }
}
