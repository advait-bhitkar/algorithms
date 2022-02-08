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
      "w-8",
      "array-rods-all",
      colors[i],
      "rounded-lg",
      "shadow-lg",
      "m"
    );

    array_ele.style.height = `${values[i] * 3}px`;
    array_ele.style.transform = `translate(${i * 48 - 220}px)`;

    var array_ele2 = document.createElement("div");
    array_ele2.classList.add("absolute", "w-full", "-mb-0.5", "bottom-2");

    var array_ele3 = document.createElement("div");
    array_ele3.classList.add("rounded-lg");
    array_ele3.style.height = `${values[i] * 3}px`;

    var node = document.createTextNode(values[i]);

    array_ele2.appendChild(node);

    array_ele.appendChild(array_ele2);
    array_ele.appendChild(array_ele3);
    container.appendChild(array_ele);
  }
}

export function resetArray() {
  generateArray(valuesReset, colorsReset, 4);
}
