const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll(".images img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
let size = images[0].clientWidth;

imagesContainer.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  imagesContainer.style.transition = "transform 0.5s ease-in-out";
  counter++;
  imagesContainer.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  imagesContainer.style.transition = "transform 0.5s ease-in-out";
  counter--;
  imagesContainer.style.transform = "translateX(" + -size * counter + "px)";
});
imagesContainer.addEventListener("transitionend", () => {
  if (images[counter].id === "lastClone") {
    imagesContainer.style.transition = "none";
    counter = images.length - 2;
    imagesContainer.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (images[counter].id === "firstClone") {
    imagesContainer.style.transition = "none";
    counter = 1;
    imagesContainer.style.transform = "translateX(" + -size * counter + "px)";
  }
});
