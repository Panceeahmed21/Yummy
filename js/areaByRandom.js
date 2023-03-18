import { areaMeals } from "./areaMeals.js";
export class areaByRandom {
  getArea() {
    async function getRandomMeals() {
      let res = await fetch( "https://www.themealdb.com/api/json/v1/1/list.php?a=list");
      let AreaList = await res.json();
      displayMeals(AreaList);
    }
    getRandomMeals();

    function displayMeals(AreaList) {
      let AreaNames = new Map(Object.entries(AreaList));
      let [value] = AreaNames;
      let areaNameTotal = value[1];
      var cartona = ``;

      for (var i = 0; i < areaNameTotal.length; i++) {

        cartona += `<div class="col-md-3">
        <div class="rounded-2 text-center cursor-pointer text-white areaCard">
        <i data-MealName="${areaNameTotal[i].strArea}" class="fa-solid fa-house-laptop fa-4x areaPart "></i>
           <h3 class="areaPart" data-MealName="${areaNameTotal[i].strArea}">${areaNameTotal[i].strArea} </h3>
        </div>
        </div>`;
      }

      document.getElementById("AreaRandom").innerHTML = cartona;

      $(".areaPart").click(function (e) {
        for (let i = 0; i < areaNameTotal.length; i++) {

          if (areaNameTotal[i].strArea === e.target.getAttribute("data-MealName")) {
            let areaName =areaNameTotal[i].strArea
            console.log(areaName);
            let areaMelObj = new areaMeals(areaName)
            areaMelObj.getAreaMeals(areaName)

          }
    }
    
    $("#home").addClass("d-none");
    $("#mealDetails").addClass("d-none");
    $("#searchPage").addClass("d-none");
    $("#category").addClass("d-none");
    $("#categIng").addClass("d-none");
    $("#mealArea").addClass("d-none");
    $("#areaIngDetails").removeClass("d-none");
})
}
}
}