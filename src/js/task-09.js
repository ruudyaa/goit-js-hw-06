"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const textColor = document.querySelector(".color");
const btnColorChanger = document.querySelector(".change-color");

btnColorChanger.addEventListener("click", ChangeColor);

function ChangeColor() {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
}
