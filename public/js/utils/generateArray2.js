import {
  shuffleArrayRandom,
  shuffleArrayReverse,
  shuffleArrayFewUnique,
  shuffleArrayNearlySorted,
} from "./shuffle.js";
var container = document.getElementById("array-create");

var colorsReset;
var valuesReset;
var shuffleMethodReset;

export function generateArray(values, colors, shuffleMethod) {
  if (shuffleMethod == 0) {
    colors = shuffleArrayRandom(colors);
    values = shuffleArrayRandom(values);
  } else if (shuffleMethod == 1) {
    colors = shuffleArrayRandom(colors);
    values = shuffleArrayReverse(values);
  } else if (shuffleMethod == 2) {
    colors = shuffleArrayRandom(colors);
    values = shuffleArrayRandom(values);

    values = shuffleArrayFewUnique(values);
    let colorsClone = [...colors];

    let myMap = new Map();
    var count = 0;

    for (let i = 0; i < values.length; i++) {
      if (myMap.has(values[i])) {
        colors[i] = myMap.get(values[i]);
      } else {
        myMap.set(values[i], colorsClone[count]);
        colors[i] = myMap.get(values[i]);

        count++;
      }
    }
  } else if (shuffleMethod == 3) {
    colors = shuffleArrayRandom(colors);
    values = shuffleArrayNearlySorted(values);
  } else {
    console.log("Some Error!!!");
  }

  colorsReset = [...colors];
  valuesReset = [...values];
  shuffleMethodReset = shuffleMethod;

  // console.log(valuesReset);
  // console.log(colorsReset);

  container.innerHTML = "";
  for (var i = 0; i < values.length; i++) {
    var array_ele = document.createElement("div");
    array_ele.classList.add(
      "w-10",
      "h-10",
      "ml-2",
      "array-rods-all",
      colors[0],
      "rounded-lg",
      "shadow-lg",
      "m",
      "relative"
    );

    var kkkkkk = (values.length / 2) * 48 - 16;
    // array_ele.style.height = `${values[i] * 3}px`;
    array_ele.style.transform = `translate(${i * 48 - kkkkkk}px)`;

    var array_ele2 = document.createElement("div");
    array_ele2.classList.add("absolute", "w-10", "bottom-3", "mx-auto");

    var node = document.createTextNode(values[i]);

    array_ele2.appendChild(node);
    array_ele.appendChild(array_ele2);
    container.appendChild(array_ele);
  }
}

export function resetArray() {
  generateArray(valuesReset, colorsReset, 4);
}
