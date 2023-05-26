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

const timer = Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  seconds,
  timeSet,
  isRunning,
});

const sound = Sound();

buttonAddFiveMinutesButton.addEventListener("click", timer.addFiveMinutes);
buttonremoveFiveMinutesButton.addEventListener("click", timer.removeFiveMinutes);
buttonPlay.addEventListener("click", timer.updateTime);
buttonStop.addEventListener("click", timer.stopTime);

forestCard.addEventListener("click", function () {
  forestCard.classList.toggle("press");
  sound.playForestSounds();
});

rainCard.addEventListener("click", function () {
  rainCard.classList.toggle("press");
  sound.playRainSounds();
});

coffeeCard.addEventListener("click", function () {
  coffeeCard.classList.toggle("press");
  sound.playCoffeSounds();
});

firePlaceCard.addEventListener("click", function () {
  firePlaceCard.classList.toggle("press");
  sound.playfirePlaceSounds();
});
