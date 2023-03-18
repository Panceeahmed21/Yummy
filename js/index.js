import { areaByRandom } from "./areaByRandom.js";
import { TotalIngredients } from "./TotalIngredients.js";

import { MainMeals } from "./UI.js";
let mainMealsVar = new MainMeals();
mainMealsVar.getMeals();

import { MealDetails } from "./mealDetails.js";
let mealDtailsVar = new MealDetails();
mealDtailsVar.getMealId();

import { MealByName } from "./searchName.js";
import { MealByLetter } from "./searchLetter.js";
import { MealCategory } from "./mealCategories.js";
let mealCat = new MealCategory();
mealCat.getMealName();

$(document).ready(function () {
  $(".lds-roller").fadeOut(1000, function () {
    $(".loading-page").fadeOut(1000, function () {
      // $("body").css("overflow", "auto");
    });
  });
  let x = $(".side-bar-left").innerWidth();

  $(".side-bar").animate({ left: -x }, 1);
  $(".iconSim").click(function () {
    let leftWidth = $(".side-bar").css("left");
    if (leftWidth == "0px") {
      $(".side-bar ul li").animate({ top: "60%", opacity: "0" }, 500);
      $(".side-bar").animate({ left: -x }, 500);
      $(".iconSim").html(` <div class="iconSim fs-2 fw-bold">☰</div>`);
    } else {
      $(".side-bar ul li").animate({ top: "0px", opacity: "1" }, 900);
      $(".side-bar").animate({ left: "0px" }, 1000);
      $(".iconSim").html(
        `<i class="fa-solid fa-lg fa-x ps-2 close-icon" id="closeIcon"></i>`
      );
    }
  });

  $("#ser").click(function () {
    $("#home").addClass("d-none");
    $("#mealDetails").addClass("d-none");
    $("#searchPage").removeClass("d-none");
    $(".side-bar").animate({ left: -x }, 600);
    $(".iconSim").html(` <div class="iconSim fs-2 fw-bold">☰</div>`);
  });
  $("#searchNameValue").on("input", function () {
    let mealSearchName = $("#searchNameValue").val();
    let searchObj = new MealByName(mealSearchName);
    searchObj.getMealName(mealSearchName);
  });

  $("#searchNameLetter").on("input", function () {
    let mealSearchLetter = $("#searchNameLetter").val();
    let searchObj = new MealByLetter(mealSearchLetter);
    searchObj.getMealName(mealSearchLetter);
  });
  $("#cat").click(function () {
    $("#home").addClass("d-none");
    $("#mealDetails").addClass("d-none");
    $("#searchPage").addClass("d-none");
    $("#category").removeClass("d-none");

    $(".side-bar").animate({ left: -x }, 600);
    $(".iconSim").html(` <div class="iconSim fs-2 fw-bold">☰</div>`);
  });

  $("#Ar").click(function () {
    $("#home").addClass("d-none");
    $("#mealDetails").addClass("d-none");
    $("#searchPage").addClass("d-none");
    $("#category").addClass("d-none");
    $("#categIng").addClass("d-none");
    $("#mealArea").removeClass("d-none");

    let randomAr = new areaByRandom();
    randomAr.getArea();

    $(".side-bar").animate({ left: -x }, 600);
    $(".iconSim").html(` <div class="iconSim fs-2 fw-bold">☰</div>`);
  });

  $("#In").click(function () {
    $("#home").addClass("d-none");
    $("#mealDetails").addClass("d-none");
    $("#searchPage").addClass("d-none");
    $("#category").addClass("d-none");
    $("#categIng").addClass("d-none");
    $("#mealArea").addClass("d-none");
    $("#mealIngredient").removeClass("d-none");

    let randomIn = new TotalIngredients();
    randomIn.getIng();

    $(".side-bar").animate({ left: -x }, 600);
    $(".iconSim").html(` <div class="iconSim fs-2 fw-bold">☰</div>`);
  });
  
  $("#Con").click(function () {
    $("#home").addClass("d-none");
    $("#mealDetails").addClass("d-none");
    $("#searchPage").addClass("d-none");
    $("#category").addClass("d-none");
    $("#categIng").addClass("d-none");
    $("#mealArea").addClass("d-none");
    $("#mealIngredient").addClass("d-none");
    $("#contact").removeClass("d-none");
    $(".side-bar").animate({ left: -x }, 600);
    $(".iconSim").html(` <div class="iconSim fs-2 fw-bold">☰</div>`);
  
  });



});

