import { validateForm } from "./validate.js";

const formData = document.querySelector("#login-form");
const inputs = formData.elements;
const submitToLogin = document.querySelector("#login-btn");
const errorWrapper = document.querySelector(".error");

console.log(inputs);

const state = {
  email: "",
  pass: ""
};

inputs.forEach((el) => {
  el.addEventListener("blur", () => {
    validateForm(el, errorWrapper);
  });
});
