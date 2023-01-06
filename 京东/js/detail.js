//实现前进后退小图==============
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let ul = document.querySelector(".spec-items ul");
let lis = document.querySelectorAll(".spec-items ul li");
let left = parseInt(getComputedStyle(ul).left);
prev.addEventListener("click", () => {
  if (left >= 0) {
    left = 0;
  } else {
    left += 58;
    ul.style.left = `${left}px`;
  }
  prev.style.background = "url(./images/disabled-prev.png)";
});
next.addEventListener("click", () => {
  if (left <= -58 * (lis.length - 5)) {
    return;
  } else {
    left -= 58;
    ul.style.left = `${left}px`;
  }
});
//实现显示中图的效果===============
let img = document.querySelector(".img");
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", () => {
    for (let j = 0; j < lis.length; j++) {
      lis[j].className = "";
    }
    lis[i].classList.add("img-hover");
    img.src = lis[i].children[0].src;
  });
}

let mainImg = document.querySelector(".main-img");
let pup = document.querySelector(".zoom-pup");
let zoomDiv = document.querySelector(".zoom-div");
let bigImg = document.querySelector(".bigImg");
mainImg.onmouseover = () => {
  pup.style.display = "block";
  zoomDiv.style.display = "block";
  bigImg.src = img.src;
};
mainImg.onmouseout = () => {
  pup.style.display = "none";
  zoomDiv.style.display = "none";
};
mainImg.addEventListener("mousemove", (e) => {
  //获取鼠标距离文档顶部的距离
  let pageY = e.pageY;
  let pageX = e.pageX;
  //获取中图距离文档顶部的距离
  let offsetTop = mainImg.offsetTop;
  let offsetLeft = mainImg.offsetLeft;
  //获取黄色小块的高度
  let pupHeight = pup.clientHeight;
  let pupWidth = pup.clientWidth;

  let mainImgHeight = mainImg.clientHeight;
  let mainImgWidth = mainImg.clientWidth;

  let top = pageY - offsetTop - pupHeight / 2;
  let left = pageX - offsetLeft - pupWidth / 2;

  if (top <= 0) {
    top = 0;
  } else if (top >= mainImgHeight - pupHeight) {
    top = mainImgHeight - pupHeight;
  }
  if (left <= 0) {
    left = 0;
  } else if (left >= mainImgWidth - pupWidth) {
    left = mainImgWidth - pupWidth;
  }

  pup.style.top = top + "px";
  pup.style.left = left + "px";

  let y = top / (mainImgHeight - pupHeight);
  let yy = y * (800 - 540);
  let x = left / (mainImgWidth - pupWidth);
  let xx = x * (800 - 540);
  bigImg.style.top = -yy + "px";
  bigImg.style.left = -xx + "px";
});
//实现购物车数量的改变
let reduce = document.querySelector(".reduce");
let add = document.querySelector(".add");
let buyNum = document.querySelector(".buy-num");
add.addEventListener("click", () => {
  buyNum.value++;
  if (buyNum.value > 1) {
    reduce.classList.remove("disabled");
  }
});
reduce.addEventListener("click", () => {
  buyNum.value--;
  if (buyNum.value <= 1) {
    buyNum.value = 1;
    reduce.classList.add("disabled");
  }
});
