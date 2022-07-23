"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highScore = 0;
console.log(secretNumber);

const message = function (message) {
  document.querySelector(".message").textContent = message;
};

const guess = function (guess) {
  document.querySelector(".guess").textContent = guess;
};

const points = function (check) {
  document.querySelector(".points").textContent = check;
};

guess(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const playNumber = Number(document.querySelector(".number").value);

  if (secretNumber + 2 * playNumber === 100) {
    message("you win:)");
    document.querySelector(".next").classList.remove("hidden");

    document.querySelector(".again").classList.add("hidden");

    score = score + 1;
    points(score);
  } else {
    message("you lost:(");
    document.querySelector(".next").classList.add("hidden");

    document.querySelector(".again").classList.remove("hidden");
  }

  if (highScore < score) {
    highScore = 1 + highScore;

    document.querySelector(".high").textContent = highScore;
  }
});

document.querySelector(".next").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guess(secretNumber);
  message("new level");
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 0;
  points(score);
  guess(secretNumber);
  message("start");
});
