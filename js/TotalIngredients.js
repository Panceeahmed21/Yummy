import { MealsOfSameIng } from "./MealsOfSameIng.js";
export class TotalIngredients {
  getIng() {
    async function getRandomMeals() {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
      );
      let ingList = await res.json();
      displayTotalIng(ingList);
    }
    getRandomMeals();
    function displayTotalIng(ingList) {
      let ingConverted = new Map(Object.entries(ingList));
      let [value] = ingConverted;
      let ingListTotal = value[1];

      var cartona = ``;
      for (var i = 0; i < 12; i++) {
        cartona += `         <div class="col-md-3">
        <div class="rounded-2 text-center text-white ingParag " data-Ing="${ingListTotal[i].strIngredient}">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3 data-Ing="${ingListTotal[i].strIngredient}">${ingListTotal[i].strIngredient}</h3>
          <p data-Ing="${ingListTotal[i].strIngredient}" >${ingListTotal[i].strDescription}</p>
        </div>

        </div> `;
      }

      document.getElementById("mealIngredientID").innerHTML = cartona;

      $(".ingParag").click(function (e) {
        for (let i = 0; i < ingListTotal.length; i++) {
          if (
            ingListTotal[i].strIngredient === e.target.getAttribute("data-Ing")
          ) {
            let ingredientName = ingListTotal[i].strIngredient;

            let sameMealIngObj = new MealsOfSameIng(ingredientName);
            sameMealIngObj.getMealsOfIng(ingredientName)
          }
        }
        $("#mealDetails").addClass("d-none");
        $("#home").addClass("d-none");
        $("#searchPage").addClass("d-none");
        $("#category").addClass("d-none");
        $("#categIng").addClass("d-none");
        $("#mealArea").addClass("d-none");
        $("#areaIngDetails").addClass("d-none");
        $("#mealIngredient").addClass("d-none");
        $("#mealHasIng").removeClass("d-none");
      });
    }
  }
}
