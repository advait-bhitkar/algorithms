var elementPop = document.getElementById("dropdown");

var flag = false;

export function tooltipSpeed() {
  const button = document.querySelector("#speed-btn");
  const tooltip = document.querySelector("#tooltip");
  Popper.createPopper(button, tooltip, {
    placement: "top",
  });
  elementPop.classList.add("invisible");

  ///tooltip speed
  var myElementToCheckIfClicksAreInsideOfSpeed =
    document.getElementById("speed-btn");
  var isOpen = false;

  document.body.addEventListener("click", function (event) {
    if (
      myElementToCheckIfClicksAreInsideOfSpeed.contains(event.target) &&
      !isOpen
    ) {
      elementPop.classList.remove("invisible");
      isOpen = true;
    } else {
      elementPop.classList.add("invisible");
      isOpen = false;
    }
  });
}

var isShuffleButtonDisabled = false;

export function disableShuffleButton() {
  const buttonShuffle = document.querySelector("#shuffle-btn");
  buttonShuffle.style.backgroundColor = "#f59e0b";
  buttonShuffle.innerHTML = "Reset";
  isShuffleButtonDisabled = true;
}

export function enableShuffleButton() {
  const buttonShuffle = document.querySelector("#shuffle-btn");
  buttonShuffle.style.backgroundColor = "#dc2626";
  buttonShuffle.innerHTML = "Shuffle";
  isShuffleButtonDisabled = false;
  flag = true;
}

export function tooltipShuffle() {
  const buttonShuffle = document.querySelector("#shuffle-btn");
  const tooltipShuffle = document.querySelector("#tooltip-shuffle");
  Popper.createPopper(buttonShuffle, tooltipShuffle, {
    placement: "top",
  });

  ////tooltip shuffle
  var myElementToCheckIfClicksAreInsideOfShuffle =
    document.getElementById("shuffle-btn");
  var elementPopShuffle = document.getElementById("dropdown-shuffle");
  var isOpenShuffle = false;

  document.body.addEventListener("click", function (event) {
    if (!isShuffleButtonDisabled) {
      if (!flag) {
        if (
          myElementToCheckIfClicksAreInsideOfShuffle.contains(event.target) &&
          !isOpenShuffle
        ) {
          elementPopShuffle.classList.remove("invisible");
          isOpenShuffle = true;
        } else {
          elementPopShuffle.classList.add("invisible");
          isOpenShuffle = false;
        }
      }

      flag = false;
    }
  });
}
