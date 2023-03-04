"use strict";



let icons = document.querySelectorAll(".body .slider-box i");

let imgs = document.querySelectorAll(".body .slider-box .slider img");

let tabs = document.querySelectorAll(".body .show .tabs .tab");

let show = document.querySelector(".body .show .tabs");

let translate = 0;
let count = 0;

icons[0].addEventListener("click", function () {
  let active = document.querySelector(".active");
  let tabA = document.querySelector(".active-tab");


  if (active.previousElementSibling == null) {
    active.classList.remove("active");
    active.parentNode.lastElementChild.classList.add("active");
    tabA.classList.remove("active-tab");
    tabA.parentNode.lastElementChild.classList.add("active-tab");
  } else {
    active.classList.remove("active");
    active.previousElementSibling.classList.add("active");
    tabA.classList.remove("active-tab");
    tabA.previousElementSibling.classList.add("active-tab");
  }
})


icons[1].addEventListener("click", function () {
  let active = document.querySelector(".active");
  let tabA = document.querySelector(".active-tab");


  if (active.nextElementSibling == null) {
    active.classList.remove("active");
    active.parentNode.firstElementChild.classList.add("active");
    tabA.classList.remove("active-tab");
    tabA.parentNode.firstElementChild.classList.add("active-tab");
  } else {
    active.classList.remove("active");
    active.nextElementSibling.classList.add("active");
    tabA.classList.remove("active-tab");
    tabA.nextElementSibling.classList.add("active-tab");
  }
})


tabs.forEach(t => {
  t.addEventListener("click", function () {
    let active = document.querySelector(".active");
    let tabA = document.querySelector(".active-tab");

    console.log(tabA);

    imgs.forEach(img => {
      if (this.getAttribute("data-id") == img.getAttribute("data-id")) {
        tabA.classList.remove("active-tab");
        active.classList.remove("active");
        img.classList.add("active");
        this.classList.add("active-tab");
      } else {
      }
    });

  });
});

let body = document.querySelector("body");

body.addEventListener("keyup", function (e) {
  if (e.keyCode == "37") {
    icons[0].click();
  }

  if (e.keyCode == "39") {
    icons[1].click();
  }

  if (e.keyCode == "40") {
    show.style.opacity = "0";
  }

  if (e.keyCode == "38") {
    show.style.opacity = "1";
  }

  // console.log(icons[1].click());
  // console.log(e.keyCode);

})




