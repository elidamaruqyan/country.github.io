import { checkRequired } from "./helper/validateFormField";
import { getFavoriteCountries } from "./services/getFavoritesCountries";

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

getFavoriteCountries();

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error-wrapper";
  small.innerText = message;
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const checkInputs = (field) => {
  // trim to remove the whitespaces;
  console.log(field);
  const fieldValue = field.value.trim();
  const fieldType = field.type;

  if (fieldValue === "" && fieldType === "email") {
    setErrorFor(username, "Username cannot be blank");
  } else if (fieldValue === "" && fieldType === "password") {
    setErrorFor(password, "Password cannot be blank");
  } else if (fieldType === "password" && fieldValue.length < 5) {
    setErrorFor(password, "Password should be 5 ");
  } else {
    setSuccessFor(password);
  }
  // else {
  //   setSuccessFor(username);
  // }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  window.location.href = "index.html";
});

username.addEventListener("blur", (e) => {
  e.preventDefault();
  checkRequired(username.value, true);
  checkInputs(username);
});

username.addEventListener("blur", (e) => {
  e.preventDefault();
  checkRequired(password.value, true);
  checkInputs(username);
});
