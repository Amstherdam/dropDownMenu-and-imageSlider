const clickRight = document.querySelector(".click-right");
const clickLeft = document.querySelector(".click-left");
let sliderImg = document.querySelector("#sliderImg");

const imgList = [
  "img/Img1.jpg",
  "img/Img2.jpg",
  "img/Img3.jpg",
  "img/Img4.jpg",
  "img/Img5.jpg",
];

const slideImg = function () {
  let count = 0;

  clickLeft.addEventListener("click", () => {
    count--
    if (count < 0) {
      count = imgList.length - 1;
      sliderImg.src = imgList[count];
      console.log(count)
    } else   {
      sliderImg.src = imgList[count];
    }
  });

  clickRight.addEventListener("click", () => {
    count++;
    if (count >= imgList.length) {
      count = 0;
      sliderImg.src = imgList[count];
    } else {
      sliderImg.src = imgList[count];
    }
  });
};

slideImg();
