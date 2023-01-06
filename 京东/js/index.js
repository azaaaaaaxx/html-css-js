//实现模糊查询
let keyword = document.querySelector(".keyword");
let searchHelper = document.querySelector(".search-helper");

let searchArr = [
  "小米手机",
  "华为手机",
  "苹果手机",
  "小米电视",
  "小米平板",
  "苹果12",
  "苹果13",
  "苹果手表",
  "苹果平板",
  "性感黑丝",
  "纯欲白丝",
  "肉丝",
];

keyword.addEventListener("input", () => {
  searchHelper.innerHTML = "";

  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i].indexOf(keyword.value) != -1) {
      searchHelper.innerHTML += "<p>" + searchArr[i] + "</p>";
      searchHelper.style.display = "block";
    }
    if (keyword.value === "") {
      searchHelper.innerHTML = "";
    }
  }
});
keyword.addEventListener("blur", () => {
  searchHelper.style.display = "none";
});
//实现轮播图的切换

let img = document.querySelector(".img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let slide = document.querySelector(".slide");
let lis = document.querySelectorAll(".banner-btn li");
let imgArr = [
  "1.jpg",
  "2.webp",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];
let count = 0;
function cutImg() {
  img.src = "./images/" + imgArr[count];
  for (let i = 0; i < lis.length; i++) {
    lis[i].className = "";
  }
  lis[count].classList.add("active");
}
let timer = setInterval(() => {
  count++;
  if (count > imgArr.length - 1) count = 0;
  cutImg();
}, 3000);

next.addEventListener("click", () => {
  count++;
  if (count > imgArr.length - 1) count = 0;
  cutImg();
});
prev.addEventListener("click", () => {
  count--;
  if (count < 0) count = imgArr.length - 1;
  cutImg();
});
slide.addEventListener("mouseover", () => {
  clearInterval(timer);
});
slide.addEventListener("mouseout", () => {
  timer = setInterval(() => {
    count++;
    if (count > imgArr.length - 1) count = 0;
    cutImg();
  }, 3000);
});
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", () => {
    count = i;
    cutImg();
  });
}
//实现楼层的定位切换
let header = document.querySelector(".header");
let banner = document.querySelector(".banner");
let elevator = document.querySelector(".elevator");

//实现楼层滚动文字变色
let items = document.querySelectorAll(".content .item");
let elevatorA = document.querySelectorAll(".elevator a");
let elevatorArr = [];

let base = header.offsetHeight + banner.offsetHeight;

for (let i = 0; i < items.length; i++) {
  base = base + items[i].offsetHeight;
  elevatorArr.push(base);
}
function clearColor() {
  for (let i = 0; i < items.length; i++) {
    elevatorA[i].style.color = "#333";
  }
}
let search = document.querySelector(".search");
let searchM = document.querySelector(".search-m");
let searchForm = document.querySelector(".form");
let searchLogo = document.querySelector(".search_logo");
document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  let headerHeight = header.offsetHeight;
  let bannerHeight = banner.offsetHeight;
  if (top >= headerHeight + bannerHeight) {
    elevator.classList.add("elevator-fix");
    search.classList.add("search-fix");
    searchM.style.height = "50px";
    searchForm.style.top = "8px";
    searchLogo.style.display = "block";
  } else {
    elevator.classList.remove("elevator-fix");
    search.classList.remove("search-fix");
    searchM.style.height = "60px";
    searchForm.style.top = "25px";
    searchLogo.style.display = "none";
  }
  if (top >= headerHeight + bannerHeight && top < elevatorArr[0]) {
    clearColor();
    elevatorA[0].style.color = "red";
  } else if (top >= elevatorArr[0] && top < elevatorArr[1]) {
    clearColor();
    elevatorA[1].style.color = "red";
  } else if (top >= elevatorArr[1] && top < elevatorArr[2]) {
    clearColor();
    elevatorA[2].style.color = "red";
  } else if (top >= elevatorArr[2]) {
    clearColor();
    elevatorA[3].style.color = "red";
  } else {
    clearColor();
  }
});
let ul = document.querySelector(".youxuan ul");
ul.innerHTML += ul.innerHTML;

let left = parseInt(getComputedStyle(ul).left);
const move = () => {
  left = left - 5;
  if (left <= -ul.clientWidth) {
    left = 0;
  }
  ul.style.left = left + "px";
};
let time = setInterval(move, 50);
