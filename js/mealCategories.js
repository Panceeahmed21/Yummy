import { MealDetails } from "./mealDetails.js";
import { categIngr } from "./categoryIngredients.js";

export class MealCategory {
  getMealName() {
    async function getSearchMeals() {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      let finalRes = await res.json();

      displayMeal(finalRes);
    }
    getSearchMeals();

    function displayMeal(finalRes) {
      let mealNames = new Map(Object.entries(finalRes));
      let [value] = mealNames;
      let mealTotal = value[1];
      var cartona = ``;
      for (let i = 0; i < mealTotal.length; i++) {
        cartona += `
    <div class="col-md-3  ">
    <div class="item position-relative">
        <img src="${mealTotal[i].strCategoryThumb}" alt="" class="img-fluid">
        <div class="item-layer categCard position-absolute mealSpecial ">
            <div class="MealName cateMeal p-2 pb-3 text-center " >
            <h3 data-meal="${mealTotal[i].strCategory}">${mealTotal[i].strCategory}</h3>
            <p class="pb-2 " data-meal="${mealTotal[i].strCategory}">${mealTotal[i].strCategoryDescription}</p>
            </div>
        </div>
    </div>
</div>

    `;
      }
      document.getElementById("categor").innerHTML = cartona;

      $(".categCard").click(function (e) {
        for (let i = 0; i < mealTotal.length; i++) {
          if (mealTotal[i].strCategory === e.target.getAttribute("data-meal")) {
            let categoryName = mealTotal[i].strCategory;
            let categIngObj = new categIngr(categoryName);
            categIngObj.getCategName(categoryName);
            $("#home").css("display", "none");
            $("#searchPage").css("display", "none");
            $("#category").css("display", "none");
            $("#mealDetails").css("display", "none");
            $("#categIng").removeClass("d-none");
          }
        }
      });
    }
  }
}
