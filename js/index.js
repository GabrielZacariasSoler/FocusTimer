import { Timer } from "./timeControler.js";
import { Sound } from "./sounds.js";

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const buttonAddFiveMinutesButton = document.querySelector("#addFiveMinutesButton");
const buttonremoveFiveMinutesButton = document.querySelector("#removeFiveMinutesButton");
const buttonPlay = document.querySelector("#play");
const buttonStop = document.querySelector("#stop");
let displayMinutes = Number(minutes.textContent);
let displaySeconds = Number(seconds.textContent);
let timeSet;
let isRunning = false;
const forestCard = document.querySelector("#forest-card");
const rainCard = document.querySelector("#rain-card");
const coffeeCard = document.querySelector("#coffee-shop-card");
const firePlaceCard = document.querySelector("#fireplace-card");
const forestCardSound = new Audio("./sounds/forest.wav");
const rainCardSound = new Audio("./sounds/rain.wav");
const coffeCardSound = new Audio("./sounds/coffe.wav");
const firePlaceCardSound = new Audio("./sounds/fireplace.wav");

const timer = Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  seconds,
  timeSet,
  isRunning,
});

const sound = Sound({ forestCardSound, rainCardSound, coffeCardSound, firePlaceCardSound });

function addClassPress(card) {
  if (card.classList.contains("press")) {
    removeClassPressFromAll();
  } else {
    removeClassPressFromAll();
    card.classList.add("press");
  }
}

buttonAddFiveMinutesButton.addEventListener("click", timer.addFiveMinutes);
buttonremoveFiveMinutesButton.addEventListener("click", timer.removeFiveMinutes);
buttonPlay.addEventListener("click", timer.updateTime);
buttonStop.addEventListener("click", timer.stopTime);

forestCard.addEventListener("click", function () {
  addClassPress(forestCard);
  sound.playSounds(forestCardSound, forestCard);
});

rainCard.addEventListener("click", function () {
  addClassPress(rainCard);
  sound.playSounds(rainCardSound, rainCard);
});

coffeeCard.addEventListener("click", function () {
  addClassPress(coffeeCard);
  sound.playSounds(coffeCardSound, coffeeCard);
});

firePlaceCard.addEventListener("click", function () {
  addClassPress(firePlaceCard);
  sound.playSounds(firePlaceCardSound, firePlaceCard);
});

function removeClassPressFromAll() {
  forestCard.classList.remove("press");
  rainCard.classList.remove("press");
  coffeeCard.classList.remove("press");
  firePlaceCard.classList.remove("press");
}
