import { TotalIngredients } from "./TotalIngredients.js";
import { MealDetails } from "./mealDetails.js";
export class MealsOfSameIng {
    getMealsOfIng(ingredientName) {
      async function getRandomMeals(ingredientName) {
        let res = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`
        );
        let ingList = await res.json();
        console.log(ingList);
         displayIngofSame(ingList);
      }
     getRandomMeals(ingredientName);
     function displayIngofSame(finalRes) {
        let mealNames = new Map(Object.entries(finalRes));
        let [value] = mealNames;
        let mealTotal = value[1];
        var cartona = ``;
        for (let i = 0; i < mealTotal.length; i++) {
            cartona +=`  <div class="col-md-3">
            <div class="item position-relative ">
                <img src="${mealTotal[i].strMealThumb}" class="img-fluid rounded-3" alt="">
                <div class="item-layer mealAreaCard position-absolute d-flex align-items-center ps-1  rounded-3" data-MealName="${mealTotal[i].strMeal}">
                    <div class="MealName mealAreaCard" data-MealName="${mealTotal[i].strMeal}" >${mealTotal[i].strMeal}</div>
            </div>
    </div>
</div>`
        }
        document.getElementById("mealsListOfIng").innerHTML = cartona;
        $(".mealAreaCard").click(function (e) {
            for (let i = 0; i < mealTotal.length; i++) {
              if (mealTotal[i].strMeal === e.target.getAttribute("data-MealName")) {
                let mealId = mealTotal[i].idMeal;
    
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
            $("#mealIngredient").addClass("d-none");
            $("#mealHasIng").addClass("d-none");
          });
      }
    }
    }