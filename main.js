"use strict";

import "./styles/main.scss";

function Slider({ nextBtnSelector, prevBtnSelector, listSelector }) {
  const next = document.querySelector(nextBtnSelector);
  const prev = document.querySelector(prevBtnSelector);
  const list = document.querySelector(listSelector);

  const slides = Array.from(list.querySelectorAll("li"));
  this._sliderLength = slides.length;
  let activeSlideIndex = slides.findIndex((elem) =>
    elem.classList.contains("active")
  );

  function showNextSlide() {
    slides[activeSlideIndex].classList.remove("active");
    activeSlideIndex += 1;
    opacity();
    slides[activeSlideIndex].classList.add("active");
  }

  function showPrevSlide() {
    slides[activeSlideIndex].classList.remove("active");
    activeSlideIndex -= 1;
    opacity();
    slides[activeSlideIndex].classList.add("active");
  }
  this.showNextSlide = showNextSlide.bind(this);
  this.showPrevSlide = showPrevSlide.bind(this);
  next.addEventListener("click", this.showNextSlide);
  prev.addEventListener("click", this.showPrevSlide);

  function opacity() {
    if (activeSlideIndex === 0) {
      prev.classList.add("disabled");
      return;
    }
    if (activeSlideIndex === slides.length - 1) {
      next.classList.add("disabled");
      return;
    }
    prev.classList.remove("disabled");
    next.classList.remove("disabled");
  }
  opacity();
}

const slider = new Slider({
  nextBtnSelector: ".js--next",
  prevBtnSelector: ".js--prev",
  listSelector: ".js--list",
});

console.log(slider);
