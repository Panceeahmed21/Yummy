import { MainMeals } from "./UI.js";
export class catIngDetails {
  getMealId(mealId) {
    if (mealId == undefined) {
    } else {
      async function getRandomMeals(mealId) {
        let res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        let finalRes = await res.json();
        displayDetails(finalRes);
      }

      getRandomMeals(mealId);
      function displayDetails(detailsList) {
        let detailsTotal = new Map(Object.entries(detailsList));
        let [value] = detailsTotal;
        let mealTotal = value[1];
        var cartona = ``;

        for (let i = 0; i < mealTotal.length; i++) {
          var ingreList = [];
          var measuresList = [];
          var finalArray = [ingreList, measuresList];


          var ingreList = [];
          var measuresList = [];
          var recipes;
          var recipesList = [];
          mealTotal.forEach((recipe) => {
            let ingredients = Object.keys(recipe)
              .filter((k) => k.includes("strIngredient"))
              .map((k) => recipe[k]);
            let measures = Object.keys(recipe)
              .filter((k) => k.includes("strMeasure"))
              .map((k) => recipe[k]);

            for (let index = 0; index < ingredients.length; index++) {
              if (ingredients[index] != "") {
                ingreList.push(ingredients[index]);
              }
            }

            for (let w = 0; w < measures.length; w++) {
              if (measures[w] != " ") {
                measuresList.push(measures[w]);
              }
            }

            recipes = measuresList.map(function (itm, i) {
              return [itm + " " + ingreList[i]].join("");
            });

            console.log(recipes);

            for (let u = 0; u < recipes.length; u++) {
              if (
                recipes[u].includes("undefined") ||
                recipes[u].includes("null")
              ) {
              } else {
                recipesList.push(recipes[u]);
              }
            }
          });

          if (mealTotal[i].strTags == null) {
            

            cartona += `     <div class="col-md-4">
<div class="leftSide text-white">
    <img src="${mealTotal[i].strMealThumb}" class="w-100 rounded-3" alt="" srcset="">
    <h3>${mealTotal[i].strMeal}</h3>
</div>
</div>
<div class="col-md-8 rightCol">
<div class="right-side text-white w-100">
    <h3>Instructions</h3>
    <p class="60vh" >${mealTotal[i].strInstructions}</p>
    <h4>Area : <span>${mealTotal[i].strArea}</span></h4>
    <h4>Category : <span>${mealTotal[i].strCategory}</span></h4>
    <h4>Recipes : <span >
            <ul class="list-unstyled d-flex fs-6 g-3 flex-wrap">
            `;
            for (let j = 0; j < recipesList.length; j++) {
              cartona += `
                <li class="alert alert-info m-2 p-1">${recipesList[j]} </li>
            `;
            }
            cartona += `           </ul>
        </span></h4>
    <h4>Tags : <span>
    <ul class="list-unstyled d-flex">

               </ul>
        </span></h4>
        <a target="_blank" href="${mealTotal[i].strSource}" class="btn btn-success">Source</a>
        <a target="_blank" href="${mealTotal[i].strYoutube}" class="btn btn-danger">Youtube</a>
</div>
</div>
`;
          } else {
            let tags = mealTotal[i].strTags.split(",");

            cartona += `
     <div class="col-md-4">
                    <div class="leftSide text-white">
                        <img src="${mealTotal[i].strMealThumb}" class="w-100 rounded-3" alt="" srcset="">
                        <h3>${mealTotal[i].strMeal}</h3>
                    </div>
                </div>
                <div class="col-md-8 rightCol">
                    <div class="right-side text-white w-100">
                        <h3>Instructions</h3>
                        <p class="60vh" >${mealTotal[i].strInstructions}</p>
                        <h4>Area : <span>${mealTotal[i].strArea}</span></h4>
                        <h4>Category : <span>${mealTotal[i].strCategory}</span></h4>
                        <h4>Recipes : <span >
                                <ul class="list-unstyled d-flex fs-6 g-3 flex-wrap">
                                `;
            for (let j = 0; j < recipesList.length; j++) {
              cartona += `
                <li class="alert alert-info m-2 p-1">${recipesList[j]} </li>
            `;
            }
            cartona += `    </ul>
                            </span></h4>
                        <h4>Tags : <span>
                        <ul class="list-unstyled d-flex">
                        `;
            for (let j = 0; j < tags.length; j++) {
              cartona += `<li class="alert alert-danger m-2 p-1">${tags[j]}</li>           
                                `;
            }
            cartona += `        </ul>
                            </span>    </span></h4>
                            <a target="_blank" href="${mealTotal[i].strSource}" class="btn btn-success">Source</a>
                            <a target="_blank" href="${mealTotal[i].strYoutube}" class="btn btn-danger">Youtube</a>
                    </div>
                    </div>
    `;
          }
        }
console.log(mealTotal);
        document.getElementById("detailsOfCat").innerHTML = cartona;
      }
    }
  }
}
