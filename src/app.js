/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { eventListeners } from "@popperjs/core";

window.onload = function() {
  var boton = document.getElementById("button");
  boton.addEventListener("click", function() {
    clearCard();
    newcard();
  });
};

function newcard() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML =
    "<span>" + generateRandomNumber() + "</span>";
}
function clearCard() {
  document
    .querySelector(".card")
    .classList.remove("spade", "club", "heart", "diamond");
  document.querySelector(".card").innerHTML = "<span></span>";
}

let generateRandomSuit = () => {
  let suit = ["spade", "club", "heart", "diamond"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
