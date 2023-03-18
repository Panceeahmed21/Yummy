let passValue;

let inputName = document.querySelector("#nameInput");
inputName.addEventListener("input", function () {
  let nameValue = inputName.value;
  let nameRegex = /^[A-Za-z ]*$/;
  if (nameRegex.test(nameValue) == true) {
    $("#nameAlert").addClass("d-none");
    document.getElementById("submitBtn").removeAttribute("disabled");
  } else {
    $("#nameAlert").removeClass("d-none");
    document.getElementById("submitBtn").setAttribute("disabled", "true");
    return false;
  }
});

let inputEmail = document.querySelector("#emailInput");
inputEmail.addEventListener("input", function () {
  let emailValue = inputEmail.value;
  let emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
  if (emailRegex.test(emailValue) == true) {
    $("#emailAlert").addClass("d-none");
    document.getElementById("submitBtn").removeAttribute("disabled");
  } else {
    $("#emailAlert").removeClass("d-none");
    document.getElementById("submitBtn").setAttribute("disabled", "true");
    return false;
  }
});
let inputPhone = document.querySelector("#phoneInput");
inputPhone.addEventListener("input", function () {
  let phoneValue = inputPhone.value;
  let phoneRegex = /^(002)?01[0-9]{0,9}$/;
  if (phoneRegex.test(phoneValue) == true) {
    $("#phoneAlert").addClass("d-none");
    document.getElementById("submitBtn").removeAttribute("disabled");
  } else {
    $("#phoneAlert").removeClass("d-none");
    document.getElementById("submitBtn").setAttribute("disabled", "true");
    return false;
  }
});

let inputAge = document.querySelector("#ageInput");
inputAge.addEventListener("input", function () {
  let ageValue = inputAge.value;
  let ageRegex = /^[1-9][0-9]{0,1}$/;
  if (ageRegex.test(ageValue) == true) {
    $("#ageAlert").addClass("d-none");
    document.getElementById("submitBtn").removeAttribute("disabled");
  } else {
    $("#ageAlert").removeClass("d-none");
    document.getElementById("submitBtn").setAttribute("disabled", "true");
    return false;
  }
});

let inputPass = document.querySelector("#passInput1");
inputPass.addEventListener("input", function () {
  passValue = inputPass.value;
  let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (passRegex.test(passValue) == true) {
    $("#passwordAlert").addClass("d-none");
    document.getElementById("submitBtn").removeAttribute("disabled");
  } else {
    $("#passwordAlert").removeClass("d-none");
    document.getElementById("submitBtn").setAttribute("disabled", "true");
    return false;
  }
});

let rePassInput = document.querySelector("#rePassInput");

rePassInput.addEventListener("input", function () {
  let rePassValue = rePassInput.value;
  if (rePassValue === passValue) {
    $("#repasswordAlert").addClass("d-none");
    document.getElementById("submitBtn").removeAttribute("disabled");
  } else {
    $("#repasswordAlert").removeClass("d-none");
    document.getElementById("submitBtn").setAttribute("disabled", "true");
  }
});
