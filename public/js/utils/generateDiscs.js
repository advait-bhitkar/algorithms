var container = document.getElementById("peg-1");

var colorsReset;
var noOFDiscsReset;

export function generateDiscs(colors, noOfDiscs) {
  colorsReset = [...colors];
  noOFDiscsReset = noOfDiscs;

  var xxx = 48;

  container.innerHTML = "";
  for (var i = 0; i < noOfDiscs; i++) {
    //absolute rounded-lg flex justify-center fleg
    //px-4 py-2 mb-16 bg-yellow-500 rounded-lg shadow-lg w-24 hidden sm:block

    var marginBottom = "mb-" + [8 * i];

    var discWidth = "w-" + xxx;
    xxx = xxx - 8;

    var array_ele = document.createElement("div");
    array_ele.classList.add(
      "absolute",
      "rounded-lg",
      "flex",
      "justify-center",
      "m",
      marginBottom
    );

    var array_ele2 = document.createElement("div");
    array_ele2.classList.add(
      "px-4",
      "py-2",
      colors[i],
      "rounded-lg",
      "shadow-lg",
      discWidth,
      "hidden",
      "sm:block",
      "h-8"
    );

    var diskNo = noOfDiscs - i;
    var node = document.createTextNode("d-" + diskNo);
    array_ele2.appendChild(node);
    array_ele.appendChild(array_ele2);

    // var value1 = container.childNodes[0];

    // container.insertAdjacentElement("afterbegin", value1);

    container.prepend(array_ele);
    console.log(array_ele);
  }
}

export function resetDiscs() {
  generateDiscs(valuesReset, colorsReset, 4);
}
