export function shuffleArrayRandom(array) {
  var tempArray = [...array];
  for (var i = tempArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = tempArray[i];
    tempArray[i] = tempArray[j];
    tempArray[j] = temp;
  }
  return tempArray;
}

export function shuffleArrayReverse(array) {
  var tempArray = [...array];
  tempArray.sort(function (a, b) {
    return a - b;
  });
  tempArray.reverse();
  return tempArray;
}

export function shuffleArrayFewUnique(array) {
  var tempArray = [...array];
  //var shuffleArr = array[Math.floor(Math.random()*array.length)]
  var randomElement = tempArray[Math.floor(Math.random() * tempArray.length)];
  var randomElement2 = tempArray[Math.floor(Math.random() * tempArray.length)];
  var randomElement3 = tempArray[Math.floor(Math.random() * tempArray.length)];

  console.log(randomElement, randomElement2, randomElement3);

  var finalArray = new Array(array.length);

  var x = 0;
  while (x < array.length) {
    if (x < array.length) {
      finalArray[x] = randomElement;
      x++;
    } else {
      break;
    }
    if (x < array.length) {
      finalArray[x] = randomElement2;
      x++;
    } else {
      break;
    }
    if (x < array.length) {
      finalArray[x] = randomElement3;
      x++;
    } else {
      break;
    }
  }

  finalArray = shuffleArrayRandom(finalArray);

  return finalArray;
}

export function shuffleArrayNearlySorted(array) {
  var tempArray = [...array];

  for (var i = 0; i < 2; i++) {
    var j = Math.floor(Math.random() * 10);
    var k = Math.floor(Math.random() * 10);
    var temp = tempArray[k];
    tempArray[k] = tempArray[j];
    tempArray[j] = temp;
  }

  return tempArray;
}
