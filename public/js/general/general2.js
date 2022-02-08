import { generateArray } from "../utils/generateArray2.js";
import { tooltipSpeed, tooltipShuffle } from "./button.js";

var speedValue = 1;

const colorsList = [
  "bg-orange-600",
  "bg-lime-600",
  "bg-cyan-600",
  "bg-violet-600",
  "bg-pink-600",
  "bg-rose-900",
  "bg-yellow-500",
  "bg-purple-900",
  "bg-blue-500",
  "bg-slate-300",
];

const valuesList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

function generateArrayListShuffle() {
  generateArray(valuesList, colorsList, 0);
}

function generateArrayListReverse() {
  generateArray(valuesList, colorsList, 1);
}

function generateArrayListFewUnique() {
  generateArray(valuesList, colorsList, 2);
}

function generateArrayListNearlySorted() {
  generateArray(valuesList, colorsList, 3);
}

export function speed() {
  return speedValue;
}

function speed_0_50() {
  var btn = document.getElementById("speed-btn");
  btn.innerHTML = "Speed 0.5x";
  speedValue = 1.5;
}

function speed_0_75() {
  var btn = document.getElementById("speed-btn");
  btn.innerHTML = "Speed 0.75x";
  speedValue = 1.25;
}

function speedNormal() {
  speedValue = 1;
  var btn = document.getElementById("speed-btn");
  btn.innerHTML = "Speed 1x";
}

function speed_1_25() {
  var btn = document.getElementById("speed-btn");
  btn.innerHTML = "Speed 1.25x";
  speedValue = 0.75;
}

function speed_1_50() {
  var btn = document.getElementById("speed-btn");
  btn.innerHTML = "Speed 1.5x";
  speedValue = 0.5;
}

export function initComponents() {
  generateArray(valuesList, colorsList, 0);

  document
    .getElementById("list-shuffle-reverse")
    .addEventListener("click", generateArrayListReverse);
  document
    .getElementById("list-shuffle")
    .addEventListener("click", generateArrayListShuffle);
  document
    .getElementById("list-shuffle-few-unique")
    .addEventListener("click", generateArrayListFewUnique);
  document
    .getElementById("list-shuffle-nearly-sorted")
    .addEventListener("click", generateArrayListNearlySorted);

  document
    .getElementById("list-speed-0-50")
    .addEventListener("click", speed_0_50);
  document
    .getElementById("list-speed-0-75")
    .addEventListener("click", speed_0_75);
  document
    .getElementById("list-speed-normal")
    .addEventListener("click", speedNormal);
  document
    .getElementById("list-speed-1-25")
    .addEventListener("click", speed_1_25);
  document
    .getElementById("list-speed-1-50")
    .addEventListener("click", speed_1_50);

  tooltipSpeed();
  tooltipShuffle();
}

export function pauseSteps() {
  return new Promise((resolve) => {
    let playbuttonclick = function () {
      document
        .getElementById("btn-play")
        .removeEventListener("click", playbuttonclick);

      pause = 0;
      stepActive = false;
      resolve("resolved");
    };

    let stepbuttonclick = function () {
      document
        .getElementById("btn-steps")
        .removeEventListener("click", stepbuttonclick);

      stepActive = 0;
      resolve("resolved");
      stepActive = 1;
    };

    document
      .getElementById("btn-steps")
      .addEventListener("click", stepbuttonclick);

    document
      .getElementById("btn-play")
      .addEventListener("click", playbuttonclick);
  });
}

export function pauser() {
  return new Promise((resolve) => {
    let playbuttonclick = function () {
      // Remove the event from play button

      // after clicking play button

      document
        .getElementById("btn-play")

        .removeEventListener("click", playbuttonclick);

      pause = 0;

      //
      stepActive = false;

      resolve("resolved");
    };

    let stepbuttonclick = function () {
      // Remove the event from play button

      // after clicking play button

      document
        .getElementById("btn-steps")

        .removeEventListener("click", stepbuttonclick);

      stepActive = 0;

      resolve("resolved");

      stepActive = 1;
    };

    // Here is the event listener for play

    // button (instead of setTimeout) which

    // will wait for the element to get click

    // to get resolved until then it will be

    // remain stucked inside Promise

    document
      .getElementById("btn-steps")

      .addEventListener("click", stepbuttonclick);

    document
      .getElementById("btn-play")

      .addEventListener("click", playbuttonclick);
  });
}
