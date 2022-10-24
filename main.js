"use strict";

import "./styles/main.scss";

// function Slider({ nextBtnSelector, prevBtnSelector, listSelector }) {
//   const next = document.querySelector(nextBtnSelector);
//   const prev = document.querySelector(prevBtnSelector);
//   const list = document.querySelector(listSelector);

//   const slides = Array.from(list.querySelectorAll("li"));
//   console.log( slides.length)
//   this._sliderLength = slides.length;
//   let activeSlideIndex = slides.findIndex((elem) =>
//     elem.classList.contains("active")
//   );

//   function showNextSlide() {
//     if (activeSlideIndex === slides.length - 1) {
//       return;
//     }
//     slides[activeSlideIndex].classList.remove("active");
//     activeSlideIndex += 1;
//     opacity();
//     slides[activeSlideIndex].classList.add("active");
//   }

//   function showPrevSlide() {
//     if (activeSlideIndex === 0) {
//       return;
//     }
//     slides[activeSlideIndex].classList.remove("active");
//     activeSlideIndex -= 1;
//     opacity();
//     slides[activeSlideIndex].classList.add("active");
//   }
//   this.showNextSlide = showNextSlide;
//   this.showPrevSlide = showPrevSlide;
//   next.addEventListener("click", this.showNextSlide);
//   prev.addEventListener("click", this.showPrevSlide);

//   function opacity() {
//     if (activeSlideIndex === 0) {
//       prev.classList.add("disabled");
//       return;
//     }
//     if (activeSlideIndex === slides.length - 1) {
//       next.classList.add("disabled");
//       return;
//     }
//     prev.classList.remove("disabled");
//     next.classList.remove("disabled");
//   }
//   console.log(this)
// }

// const slider = new Slider({
//   nextBtnSelector: ".js--next",
//   prevBtnSelector: ".js--prev",
//   listSelector: ".js--list",
// });

// const slider2 = new Slider({
//   nextBtnSelector: ".js--next1",
//   prevBtnSelector: ".js--prev1",
//   listSelector: ".js--list1",
// });

function Validation(form) {
  const myForm = document.querySelector(form);
  const elements = myForm.elements;
  const parrentItemClass = "js--form-contorl";
  const errorBorderClass = "error-border";

  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    this.chekFormElemnt();
  });

  this.chekFormElemnt = function () {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const passwordMessage = element.dataset.password;
      const passworReq = element.dataset.passwordReq;
      if (passwordMessage) {
        this.validPassword(passwordMessage);
      }
      if (passworReq) {
        this.validPasswordReq(passworReq);
      }
    }
  };
  this.validPassword = function (message) {
    const allPasswordElements = myForm.querySelectorAll("input[type=password]");
    const valueArr = Array.from(allPasswordElements).map(
      (element) => element.value
    );
    if (valueArr[0] !== valueArr[1]) {
      allPasswordElements.forEach((item) => this.errorTemplate(item, message));
      console.log("ValidPassword", message);
    }
  };
  this.validPasswordReq = function (message) {
    const allPasswordElements = myForm.querySelectorAll("input[type=password]");
    const valueArr = Array.from(allPasswordElements).map(
      (element) => element.value
    );
    if (valueArr[0] == "" || valueArr[1] == "") {
      allPasswordElements.forEach((item) => this.errorTemplate(item, message));
      console.log("ValidReq", message);
    }
  };
  this.errorTemplate = function (element, message) {
    const parent = element.closest(`.${parrentItemClass}`);
    const eror = parent.querySelector("small");
    if (eror) {
      eror.innerText = message;
      return;
    }
    let divSmall = document.createElement("small");
    divSmall.innerText = message;
    parent.classList.add(errorBorderClass);
    parent.appendChild(divSmall);
  };
}

const form1 = new Validation(".form");
