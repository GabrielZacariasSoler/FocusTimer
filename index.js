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

function addFiveMinutes() {
  displayMinutes = Number(minutes.textContent);

  if (displayMinutes < 90) {
    displayMinutes += 5;
    displayMinutes = Math.min(displayMinutes, 90);
    minutes.textContent = String(displayMinutes).padStart(2, "0");
  }
  if (displayMinutes === 90) {
    displaySeconds = 0;
    seconds.textContent = String(displaySeconds).padStart(2, "0");
  }
}

function removeFiveMinutes() {
  displayMinutes = Number(minutes.textContent);
  displayMinutes = displayMinutes >= 5 ? displayMinutes - 5 : 0;
  minutes.textContent = String(displayMinutes).padStart(2, "0");

  if (displayMinutes < 5) {
    displaySeconds = 0;
    seconds.textContent = String(displaySeconds).padStart(2, "0");
  }
}

function updateTime() {
  if (isRunning) {
    return;
  }

  displaySeconds = Number(seconds.textContent);
  displayMinutes = Number(minutes.textContent);

  timeSet = setInterval(function () {
    if (displaySeconds === 0) {
      if (displayMinutes === 0) {
        clearInterval(timeSet);
        isRunning = false;
        return;
      }
      displayMinutes--;
      displaySeconds = 59;
    } else {
      displaySeconds--;
    }

    seconds.textContent = String(displaySeconds).padStart(2, "0");
    minutes.textContent = String(displayMinutes).padStart(2, "0");
  }, 1000);
  isRunning = true;
}

function stopTime() {
  clearInterval(timeSet);
  isRunning = false;
}

buttonAddFiveMinutesButton.addEventListener("click", addFiveMinutes);
buttonremoveFiveMinutesButton.addEventListener("click", removeFiveMinutes);
buttonPlay.addEventListener("click", updateTime);
buttonStop.addEventListener("click", stopTime);
