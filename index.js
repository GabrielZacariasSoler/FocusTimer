const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const buttonAddFiveMinutesButton = document.querySelector("#addFiveMinutesButton");
const buttonremoveFiveMinutesButton = document.querySelector("#removeFiveMinutesButton");
const buttonPlay = document.querySelector("#play");
const buttonStop = document.querySelector("#stop");
let displayMinutes = minutes.textContent;
let displaySeconds = seconds.textContent;
let timeSet;

function addFiveMinutes() {
  displayMinutes = Number(minutes.textContent);
  displayMinutes = displayMinutes >= 90 ? displayMinutes : displayMinutes + 5;
  minutes.textContent = String(displayMinutes).padStart(2, "0");
}

function removeFiveMinutes() {
  displayMinutes = Number(minutes.textContent);
  displayMinutes = displayMinutes >= 5 ? displayMinutes - 5 : 0;
  minutes.textContent = String(displayMinutes).padStart(2, "0");
}

function updateTime() {
  displaySeconds = Number(seconds.textContent);
  displayMinutes = Number(minutes.textContent);

  timeSet = setInterval(function () {
    if (displaySeconds > 0) {
      displaySeconds = displaySeconds - 1;
    } else {
      displaySeconds = 59;
      displayMinutes = displayMinutes - 1;
    }

    seconds.textContent = String(displaySeconds).padStart(2, "0");
    minutes.textContent = String(displayMinutes).padStart(2, "0");
  }, 1000);
}

function stopTime() {
  clearInterval(timeSet);
}

buttonAddFiveMinutesButton.addEventListener("click", addFiveMinutes);
buttonremoveFiveMinutesButton.addEventListener("click", removeFiveMinutes);
buttonPlay.addEventListener("click", updateTime);
buttonStop.addEventListener("click", stopTime);
