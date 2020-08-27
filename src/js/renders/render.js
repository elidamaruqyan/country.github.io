export const renderErrorMessage = (elem) => {
  const errorWrapper = document.createElement("small");
  errorWrapper.innerText = "Please fill this field";
  elem.append(errorWrapper);
};
