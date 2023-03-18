import { MainMeals } from "./UI.js";
import{catIngDetails} from "./catIngDetails.js"
import { MealDetails } from "./mealDetails.js";

export class categIngr {
  getCategName(categName) {
    async function getSearchMeals(categName) {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categName}`
      );
      let finalRes = await res.json();
      
      displayCategIng(finalRes);
    }
    getSearchMeals(categName);

    function displayCategIng(finalRes) {

     
      let detailsTotal = new Map(Object.entries(finalRes));
      let [value] = detailsTotal;
      let categTotal = value[1];


      var cartona = ``;
      for (var i = 0; i < categTotal.length; i++) {
      
        cartona += ` <div class="col-md-3">
<div class="item position-relative ">
    <img src="${categTotal[i].strMealThumb}" class="img-fluid rounded-3" alt="">
    <div class="item-layer position-absolute d-flex align-items-center ps-1  rounded-3" data-MealName="${categTotal[i].strMeal}">
        <div class="MealName" data-MealName="${categTotal[i].strMeal}">${categTotal[i].strMeal}</div>
    </div>
</div>
</div>`;
      }

      document.getElementById("categoryIngr").innerHTML = cartona;
      $(".item-layer").click(function (e) {
        for (let i = 0; i < categTotal.length; i++) {

          if (categTotal[i].strMeal === e.target.getAttribute("data-MealName")) {
            let mealId = categTotal[i].idMeal;

            let catObj = new catIngDetails(mealId);
            catObj.getMealId(mealId);
          }
        }
        
        $("#categoryDetails").removeClass("d-none");
    
        $("#home").css("display", "none");
        $("#mealDetails").css("display", "none");
        $("#searchPage").css("display", "none");
        $("#category").css("display", "none");
        $("#categIng").css("display", "none");


    })
    }
  }
}
