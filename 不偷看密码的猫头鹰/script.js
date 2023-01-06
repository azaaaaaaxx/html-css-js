const owl = document.querySelector("#owl");
const password = document.querySelector("#password");
const btn = document.querySelector("button");
password.addEventListener("focusin", () => {
  owl.classList.add("password");
});
password.addEventListener("focusout", () => {
  owl.classList.remove("password");
});
