"use strict";

import "./styles/main.scss";

const _prev = document.querySelector('.js--prev')
const _next = document.querySelector('.js--next')
const _list = document.querySelector('.js--list')


_next.addEventListener('click', function () {
  const active = _list.querySelector('.active')
  const _nextElement = active.nextElementSibling
  if (_nextElement) {
    _prev.classList.remove('half-opacity')
    active.classList.remove('active')
    _nextElement.classList.add('active')
  }
  if (!_nextElement){
    _next.classList.add('half-opacity')
  }
})

_prev.addEventListener('click', function () {
  const active = _list.querySelector('.active')
  const _prevElement = active.previousElementSibling

  if (_prevElement) {
    _next.classList.remove('half-opacity')
    active.classList.remove('active')
    _prevElement.classList.add('active')
  }
  if (!_prevElement) {
    _prev.classList.add('half-opacity')
  }
  { }
})


