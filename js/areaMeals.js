import { areaByRandom } from "./areaByRandom.js";
import { MealDetails } from "./mealDetails.js";
export class areaMeals {
  getAreaMeals(areaName) {
    async function getRandomMeals(areaName) {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
      );
      let areaList = await res.json();

      displayAreaIng(areaList);
    }
    getRandomMeals(areaName);

    function displayAreaIng(areaList) {
      let ingArea = new Map(Object.entries(areaList));
      let [value] = ingArea;
      let ingOfArea = value[1];

      var cartona = ``;
      for (var i = 0; i < ingOfArea.length; i++) {
        cartona += ` <div class="col-md-3">
<div class="item position-relative ">
    <img src="${ingOfArea[i].strMealThumb}" class="img-fluid rounded-3" alt="">
    <div class="item-layer mealAreaCard position-absolute d-flex align-items-center ps-1  rounded-3" data-MealName="${ingOfArea[i].strMeal}">
        <div class="MealName  mealAreaCard" data-MealName="${ingOfArea[i].strMeal}">${ingOfArea[i].strMeal}</div>
    </div>
</div>
</div>`;
      }

      document.getElementById("detailsOfArea").innerHTML = cartona;
      $(".mealAreaCard").click(function (e) {
        for (let i = 0; i < ingOfArea.length; i++) {
          if (ingOfArea[i].strMeal === e.target.getAttribute("data-MealName")) {
            let mealId = ingOfArea[i].idMeal;

            let mealObj = new MealDetails(mealId);
            mealObj.getMealId(mealId);
          }
        }

        $("#mealDetails").removeClass("d-none");
        $("#home").addClass("d-none");
        $("#searchPage").addClass("d-none");
        $("#category").addClass("d-none");
        $("#categIng").addClass("d-none");
        $("#mealArea").addClass("d-none");
        $("#areaIngDetails").addClass("d-none");
      });
    }
  }
}
