import { generateDiscs } from "../../js/utils/generateDiscs.js";
import { speed } from "../../js/general/general.js";

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

const margin = ["mb-8", "mb-16", "mb-24", "mb-32", "w-48", "w-40", "w-32"];

var n = 5;

generateDiscs(colorsList, n);

var containerFromRod = document.getElementById("peg-1");
var val33 = containerFromRod.childNodes[0].childNodes[0].innerHTML;
console.log(val33);

async function towerOfHanoi(noOfDisc, fromRod, toRod, auxRod) {
  if (noOfDisc == 0) return;

  towerOfHanoi(noOfDisc - 1, fromRod, auxRod, toRod);
  //move disk n from fromRod to toRod

  var peg1 = fromRod;
  var peg2 = toRod;

  var containerFromRod = document.getElementById(peg1);
  var containertorod = document.getElementById(peg2);

  var value1 = containerFromRod.childNodes[0];

  var val = containerFromRod.childNodes[0].childNodes[0].innerHTML;

  containertorod.insertAdjacentElement("afterbegin", value1);
  console.log(val);
  towerOfHanoi(noOfDisc - 1, auxRod, toRod, fromRod);
}

function tower() {
  towerOfHanoi(n, "peg-1", "peg-3", "peg-2");
}

document.getElementById("btn-play").addEventListener("click", tower);
