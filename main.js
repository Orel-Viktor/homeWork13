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
  const parrentItemClass = ".js--form-contorl";
  const errorBorderClass = "error-border";
  const fieldClass = ".js--form-field";

  this.formGroups = myForm.querySelectorAll(parrentItemClass);
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    this.chekFormElemnt();
  });

  this.clearFieldErrors = function (fg) {
    fg.classList.remove(errorBorderClass);
    const error = fg.querySelector("small");
    if (error) {
      error.remove();
    }
  };

  this.chekFormElemnt = function () {
    for (const formGroup of this.formGroups) {
      const input = formGroup.querySelector(fieldClass);
      this.clearFieldErrors(formGroup);
      const passwordMessage = input.dataset.password;
      const passworReq = input.dataset.passwordReq;
      const passMinDigit = input.dataset.minLength;
      const passMinLength = input.dataset.minMessage;
      const emailReq = input.dataset.emailReq;
      const emailMessage = input.dataset.email;
      console.log(emailMessage)
      console.log(emailReq )
      if(emailMessage){
        this.validEmail(input, emailMessage)
      }
      if (emailReq) {
        this.validEmailReq(input, emailReq);
      }  
      if (passwordMessage) {
        this.validPassword(input, passwordMessage);
      }
      if (passMinLength) {
        this.validMinLength(input, passMinLength.replace("N", passMinDigit));
      }
      if (passworReq) {
        this.validPasswordReq(input, passworReq);
      }
    }
  };

  this.validPassword = function (input, message) {
    const allPasswordElements = myForm.querySelectorAll("input[type=password]");
    const valueArr = Array.from(allPasswordElements).map(
      (element) => element.value
    );
    if (valueArr[0] !== valueArr[1]) {
      this.errorTemplate(input, message);
    }
  };

  this.validPasswordReq = function (input, message) {
    const allPasswordElements = myForm.querySelectorAll("input[type=password]");
    const valueArr = Array.from(allPasswordElements).map(
      (element) => element.value
    );
    if (valueArr[0] == "" || valueArr[1] == "") {
      this.errorTemplate(input, message);
    }
  };

  this.validMinLength = (input, message) => {
    const allPasswordElements = myForm.querySelectorAll("input[type=password]");
    const valueArr = Array.from(allPasswordElements).map(
      (element) => element.value
    );
    if (valueArr[0].length < 5 || valueArr[1].length < 5) {
      this.errorTemplate(input, message);
    }
  };

  this.validEmailReq = function (input, message) {
    const emailElement = myForm.querySelectorAll("input[type=text]");
    console.log(emailElement)
    const valueArr = Array.from(emailElement).map(
      (element) => element.value);
    if (valueArr[1] === "" ) {
      this.errorTemplate(input, message);
    }
  };
  this.validEmail = function (input, message) {
    const emailElement = myForm.querySelectorAll("input[type=text]");
    const valueArr = Array.from(emailElement).map(
      (element) => element.value);
    const rexExEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    if (!valueArr[1].match(rexExEmail) ) {
      this.errorTemplate(input, message);
    }
  };

  this.errorTemplate = function (input, message) {
    const parent = input.closest(parrentItemClass);
    const error = parent.querySelector("small");
    if (error) {
      error.innerText = message;
      return;
    }
    let divSmall = document.createElement("small");
    divSmall.innerText = message;
    parent.classList.add(errorBorderClass);
    parent.appendChild(divSmall);
  };
}

const form1 = new Validation(".form");
