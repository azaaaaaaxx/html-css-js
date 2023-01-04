window.addEventListener("load", () => {
  navPathBindData();

  function navPathBindData() {
    let navPath = document.querySelector("#navPath");
    let path = goodData.path;
    for (let i = 0; i < path.length; i++) {
      if (i === path.length - 1) {
        let aNode = document.createElement("a");
        aNode.innerText = path[i].title;
        navPath.appendChild(aNode);
      } else {
        //创建a标签
        let aNode = document.createElement("a");
        aNode.href = path[i].url;
        aNode.innerText = path[i].title;

        //创建i标签
        let iNode = document.createElement("i");
        iNode.innerText = "/";

        //navPath元素添加a和i
        navPath.appendChild(aNode);
        navPath.appendChild(iNode);
      }
    }
  }

  //放大镜的移入、移出效果
  let smallPic = document.querySelector("#smallPic");
  let smallImg = document.querySelector("#smallPic img");
  let mask = document.querySelector(".mask");
  let bigPic = document.querySelector("#bigPic");
  let bigImg = document.querySelector("#bigPic img");
  const bigClassBind = () => {
    smallPic.addEventListener("mouseover", () => {
      mask.style.display = "block";
      bigPic.style.display = "block";
    });
    smallPic.addEventListener("mouseout", () => {
      mask.style.display = "none";
      bigPic.style.display = "none";
    });
    smallPic.addEventListener("mousemove", (e) => {
      let pageY = e.clientY;
      let pageX = e.clientX;
      let offsetTop = smallPic.getBoundingClientRect().top;
      let offsetLeft = smallPic.getBoundingClientRect().left;
      let maskWidth = mask.offsetWidth;
      let maskHeight = mask.offsetHeight;
      let top = pageY - offsetTop - maskHeight / 2;
      let left = pageX - offsetLeft - maskWidth / 2;
      if (top > smallPic.offsetHeight - maskHeight) {
        top = smallPic.offsetHeight - maskHeight;
      } else if (top <= 0) {
        top = 0;
      }
      if (left > smallPic.offsetWidth - maskWidth) {
        left = smallPic.offsetWidth - maskWidth;
      } else if (left <= 0) {
        left = 0;
      }
      mask.style.top = top + "px";
      mask.style.left = left + "px";
      let ratio = bigImg.offsetWidth / smallPic.offsetWidth;
      let xx = -left * ratio;
      let yy = -top * ratio;
      bigImg.style.left = xx + "px";
      bigImg.style.top = yy + "px";
    });
  };
  bigClassBind();

  //动态渲染放大镜缩略图的数据
  let ul = document.querySelector(".piclist ul");
  let imagesSrc = goodData.imagessrc;
  const thumbnailData = () => {
    for (let i = 0; i < imagesSrc.length; i++) {
      let liTag = document.createElement("li");
      let imgTag = document.createElement("img");
      imgTag.src = imagesSrc[i].s;
      liTag.appendChild(imgTag);
      ul.appendChild(liTag);
    }
  };
  thumbnailData();
  //点击切换图片
  let liNodes = document.querySelectorAll(".piclist ul li");
  const thumbnailClick = () => {
    for (let i = 0; i < liNodes.length; i++) {
      liNodes[i].addEventListener("click", () => {
        smallImg.src = imagesSrc[i].s;
        bigImg.src = imagesSrc[i].b;
      });
    }
  };
  thumbnailClick();
  //缩略图滚动效果
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  let start = 0;
  let step = (liNodes[0].offsetWidth + 20) * 2;
  let endPosition = (liNodes.length - 5) * (liNodes[0].offsetWidth + 20);
  const thumbnailLeftRightClick = () => {
    prev.addEventListener("click", () => {
      start -= step;
      if (start < 0) {
        start = 0;
      }
      ul.style.left = -start + "px";
    });
    next.addEventListener("click", () => {
      start += step;
      if (start > endPosition) {
        start = endPosition;
      }
      ul.style.left = -start + "px";
    });
  };
  thumbnailLeftRightClick();
  let rightTop = document.querySelector(".rightTop");
  let goodsDetail = goodData.goodsDetail;
  //商品详情数据的动态渲染
  const rightTopData = () => {
    let s = `<h3>${goodsDetail.title}</h3>
             <p>${goodsDetail.recommend}</p>
           <div class="priceWrap">
           <div class="priceTop">
             <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
             <div class="price">
              <span>￥</span>
              <p>${goodsDetail.price}</p>
              <i>降价通知</i>
            </div>
            <p>
            <span>累计评价</span>
            <span>${goodsDetail.evaluateNum}</span>
            </p>
            </div>
                <div class="priceBottom">
                <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <p>
                <span>${goodsDetail.promoteSales.type}</span>
                <span>${goodsDetail.promoteSales.content}</span>
            </p>
            </div>
            </div>
                <div class="support">
            <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
        <p>${goodsDetail.support}</p>
        </div>
        <div class="address">
        <span>配&nbsp;送&nbsp;至</span>
        <p>${goodsDetail.address}</p>
        </div>`;
    rightTop.innerHTML = s;
  };
  rightTopData();
  //商品参数数据的动态渲染
  let chooseWrap = document.querySelector(".chooseWrap");
  const rightBottomData = () => {
    for (let i = 0; i < goodsDetail.crumbData.length; i++) {
      let dlNode = document.createElement("dl");
      let dtNode = document.createElement("dt");
      dtNode.innerText = goodsDetail.crumbData[i].title;
      dlNode.appendChild(dtNode);
      for (let j = 0; j < goodsDetail.crumbData[i].data.length; j++) {
        let ddNode = document.createElement("dd");
        ddNode.innerText = goodsDetail.crumbData[i].data[j].type;
        dlNode.appendChild(ddNode);
      }

      chooseWrap.appendChild(dlNode);
    }
  };
  rightBottomData();
  //点击商品参数之后的颜色排他效果
  let dlList = document.querySelectorAll(".chooseWrap dl");
  let choose = document.querySelector(".choose");
  let arr = new Array(dlList.length);
  arr.fill(0);
  const clickddBind = () => {
    for (let i = 0; i < dlList.length; i++) {
      let ddNodes = dlList[i].querySelectorAll("dd");
      for (let j = 0; j < ddNodes.length; j++) {
        ddNodes[j].addEventListener("click", () => {
          choose.innerHTML = "";
          for (let k = 0; k < ddNodes.length; k++) {
            ddNodes[k].style.color = "#666";
          }
          ddNodes[j].style.color = "red";
          arr[i] = ddNodes[j].innerText;
          arr.forEach((value, index) => {
            if (value) {
              let mark = document.createElement("div");
              mark.id = "mark";
              mark.innerHTML = value;
              let aNode = document.createElement("a");
              aNode.innerText = "X";
              aNode.setAttribute("index", index);
              mark.appendChild(aNode);
              choose.appendChild(mark);
            }
          });
          let aNodes = document.querySelectorAll(".choose #mark a");
          for (let a = 0; a < aNodes.length; a++) {
            aNodes[a].addEventListener("click", (e) => {
              let idx1 = e.target.getAttribute("index");
              aNodes[a].parentNode.parentNode.removeChild(aNodes[a].parentNode);
              arr[idx1] = 0;
              let ddlist = dlList[idx1].querySelectorAll("dd");
              for (let k = 0; k < ddlist.length; k++) {
                ddlist[k].style.color = "#666";
              }
              ddlist[0].style.color = "red";
            });
          }
        });
      }
    }
  };
  clickddBind();
});
