import { checkField, checkRequired } from "./helper/validateFormField";
import { renderErrorMessage } from "./helper/render";

const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const usernameWrapper = document.querySelector(".username-control");
const passwordWrapper = document.querySelector(".password-control");

checkRequired("userName", true);

userName.addEventListener("blur", () => {
  const { value } = userName;
  checkField(value);
  renderErrorMessage(usernameWrapper);
});

password.addEventListener("blur", () => {
  const { value } = password;
  checkField(value);
  renderErrorMessage(passwordWrapper);
});
