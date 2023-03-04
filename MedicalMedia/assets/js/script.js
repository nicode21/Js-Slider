"use strict";


const slider = document.querySelector(".slider"),
  items = document.querySelectorAll(".item-box"),
  arrowIcons = document.querySelectorAll(".title-part i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;



let count = 0;
let translate = 0;

function rightSlide() {
  items.forEach(item => {

    translate = 0;

    translate = translate - 255;

    if (count == (items.length - 4) * (items.length)) {
    } else {
      count++;
      item.style.transform += `translateX(${translate}px)`;
    }

    if (count == (items.length - 4) * (items.length) - 1) {
      arrowIcons[1].style.color = "rgb(128, 174, 255)";
    } else {
      arrowIcons[0].style.color = "rgb(57, 130, 255)";
    }
  });
}

function leftSlide() {
  items.forEach(item => {

    translate = 0;

    translate = translate + 255;

    if (count == 0) {
    } else {
      count--;
      item.style.transform += `translateX(${translate}px)`;
    }

    if (count == 1) {
      arrowIcons[0].style.color = "rgb(128, 174, 255)";
    } else {
      arrowIcons[1].style.color = "rgb(57, 130, 255)";
    }
  });
}


arrowIcons[1].addEventListener("click", rightSlide);

arrowIcons[0].addEventListener("click", leftSlide);








