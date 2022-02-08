import { swap4 } from "../../js/utils/swap4.js";
import { initComponents, speed } from "../../js/general/general2.js";
import {
  disableShuffleButton,
  enableShuffleButton,
} from "../../js/general/button.js";
import { resetArray } from "../../js/utils/generateArray2.js";
import { downAnimation } from "../../js/animations/downAnimation.js";
import { upAnimation } from "../../js/animations/upAnimation.js";
import { leftAnimation } from "../../js/animations/leftAnimation.js";
import { rightAnimation } from "../../js/animations/rightAnimation.js";

var isPlay = false;
var pause = false;
var stepActive = true;

var container = document.getElementById("array-create");

initComponents();

async function BinarySearch() {
  var algoStepDesc = document.getElementById("algo-step-desc");

  if (!isPlay) {
    isPlay = true;
    disableShuffleButton();

    var blocks = document.querySelectorAll(".array-rods-all");

    algoStepDesc.innerHTML =
      "Set the swapped flag to false.Then iterate from index 1 to 10 inclusive";
    if (stepActive == true) await pauseSteps();

    var searchElement = 100;

    //sort the array

    await sortArray();

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500 * speed())
    );
  }

  console.log(binary(0, 11, 120));
}

function binary(left, right, myElement) {
  var blocks = document.querySelectorAll(".array-rods-all");

  if (right >= 1) {
    var mid = left + (right - 1) / 2;

    mid = Math.trunc(mid);

    var midValue = Number(blocks[mid].childNodes[0].innerHTML);

    if (midValue == myElement) return mid;

    if (midValue > myElement) return binary(left, mid - 1, myElement);

    return binary(mid + 1, right, myElement);
  }

  return -1;
}

document.getElementById("shuffle-btn").addEventListener("click", resetButon);

function pauser() {
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

function resetButon() {
  var algoStepDesc = document.getElementById("algo-step-desc");

  if (isPlay == true) {
    isPlay = false;
    resetArray();
    var elem = document.getElementById("btn-play");
    elem.innerHTML = "Play";
    elem.style.backgroundColor = "#9333ea";
    enableShuffleButton();
    algoStepDesc.innerHTML = "Linear Search Algorithm...";
  }
}

function stepsButton() {
  if (isPlay) {
    stepActive = true;
  } else {
    BinarySearch();
    stepActive = true;
  }

  pause = false;
}

document.getElementById("btn-steps").addEventListener("click", stepsButton);

function pauseSteps() {
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

function playButton() {
  var elem = document.getElementById("btn-play");

  var stepBtn = document.getElementById("btn-steps");

  if (elem.innerHTML == "Play") {
    elem.innerHTML = "Pause";
    pause = false;
    stepActive = false;
    stepBtn.classList.add("cursor-not-allowed");
    BinarySearch();
  } else {
    elem.innerHTML = "Play";
    pause = true;
    stepBtn.classList.remove("cursor-not-allowed");
  }
}

document.getElementById("btn-play").addEventListener("click", playButton);

var elem = document.getElementById("btn-play");
elem.innerHTML = "Play";

async function sortArray() {
  var blocks = document.querySelectorAll(".array-rods-all");

  var swapped = false;

  for (var i = 0; i < blocks.length; i += 1) {
    swapped = false;

    for (var j = 0; j < blocks.length - i - 1; j += 1) {
      // To change background-color of the
      // blocks to be compared
      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      // To compare value of two blocks
      if (value1 > value2) {
        swapped = true;

        await swap4(blocks[j], blocks[j + 1], container);
        blocks = document.querySelectorAll(".array-rods-all");
      }
    }

    if (!swapped) {
      break;
    }
  }
}
