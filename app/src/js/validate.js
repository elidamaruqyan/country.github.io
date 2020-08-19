export const validateForm = (item, errorBlock) => {
  const value = item.value;
  console.log(item);
  console.log(errorBlock);

  if (value === "") {
    errorBlock.classList.add("block");
    errorBlock.innerText = "Please Fill the necessary field";
  }
};
