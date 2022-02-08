import { swap } from "../../js/utils/swap.js";
import { initComponents, speed } from "../../js/general/general.js";
import {
  disableShuffleButton,
  enableShuffleButton,
} from "../../js/general/button.js";
import { resetArray } from "../../js/utils/generateArray.js";

var isPlay = false;
var pause = false;
var stepActive = true;

var container = document.getElementById("array-create");

initComponents();

async function BubbleSort() {
  var algoStepDesc = document.getElementById("algo-step-desc");

  if (!isPlay) {
    isPlay = true;
    disableShuffleButton();

    var blocks = document.querySelectorAll(".array-rods-all");

    algoStepDesc.innerHTML =
      "Set the swapped flag to false.Then iterate from index 1 to 10 inclusive";
    if (stepActive == true) await pauseSteps();

    var swapped = false;

    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
      swapped = false;

      for (var j = 0; j < blocks.length - i - 1; j += 1) {
        if (!isPlay) return;

        if (pause == true) await pauser();

        // To change background-color of the
        // blocks to be compared
        blocks[j].style.border = "2px solid #DDDDDD";
        blocks[j + 1].style.border = "2px solid #DDDDDD";
        var value1 = Number(blocks[j].childNodes[0].innerHTML);
        var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

        algoStepDesc.innerHTML =
          "Checking if " +
          value1 +
          " > " +
          value2 +
          " and swap them if that is true; swapped = false.";

        // To wait for .1 sec
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 500 * speed())
        );

        if (pause == true) await pauser();

        if (stepActive == true) await pauseSteps();

        // To compare value of two blocks
        if (value1 > value2) {
          swapped = true;
          algoStepDesc.innerHTML =
            "Swapping the positions of " +
            value1 +
            " and " +
            value2 +
            " and set swapped = true.";

          await swap(blocks[j], blocks[j + 1], container);
          blocks = document.querySelectorAll(".array-rods-all");

          console.log(blocks);
          if (stepActive == true) await pauseSteps();
        }

        if (pause == true) await pauser();

        // if(stepActive == true) await pauseSteps();

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 500 * speed())
        );

        // Changing the color to the previous one
        blocks[j].style.border = "none";
        blocks[j + 1].style.border = "none";

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 500 * speed())
        );
      }

      if (!swapped) {
        algoStepDesc.innerHTML =
          "no number swapped, means array is sorted now, break";

        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 500 * speed())
        );

        if (stepActive == true) await pauseSteps();

        for (var j = 0; j < blocks.length; j++) {
          blocks[blocks.length - j - 1].style.backgroundColor = "#404040";
        }

        break;
      }
      //changing the color of greatest element
      //found in the above traversal
      blocks[blocks.length - i - 1].style.backgroundColor = "#404040";
    }

    //isPlay = false;

    //Implement disable play button
    var elem = document.getElementById("btn-play");
    //elem.style.backgroundColor = "#404040";

    //algoStepDesc.innerHTML = "u...";
  }

  //algoStepDesc.innerHTML = "Array Sorted...";
}

document.getElementById("shuffle-btn").addEventListener("click", resetButon);
//document.getElementById("btn-play").addEventListener("click", BubbleSort);

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
    algoStepDesc.innerHTML = "Bubble Sort Algorithm...";
  }
}

function stepsButton() {
  if (isPlay) {
    stepActive = true;
  } else {
    BubbleSort();
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
    BubbleSort();
  } else {
    elem.innerHTML = "Play";
    pause = true;
    stepBtn.classList.remove("cursor-not-allowed");
  }
}

document.getElementById("btn-play").addEventListener("click", playButton);

var elem = document.getElementById("btn-play");
elem.innerHTML = "Play";
