let num = 0;
let numDisplay = document.getElementById("amount");

function fromSub() {
  // console.log("It works");
  num -= 1;
  numDisplay.textContent = num;
}

function fromAdd() {
  // console.log("It works");
  num += 1;
  numDisplay.textContent = num;
}

let i = 0;
let answer;

let units = ["C", "F", "K"];

let fromUnit = document.getElementById("from-unit-unit");
fromUnit.textContent = units[0];

let toUnit = document.getElementById("to-unit-unit");
toUnit.textContent = units[1];

function prvsItemF() {
  i--;
  if (i < 0) {
    i = 2;
  }

  fromUnit.textContent = units[i];
}

function nxtItemF() {
  i++;
  if (i > 2) {
    i = 0;
  }

  fromUnit.textContent = units[i];
}

function prvsItemT() {
  i--;
  if (i < 0) {
    i = 2;
  }

  toUnit.textContent = units[i];
}

function nxtItemT() {
  i++;
  if (i > 2) {
    i = 0;
  }

  toUnit.textContent = units[i];
}

function calc() {
  if (fromUnit.textContent === "C") {
    if (toUnit.textContent === "F") {
      answer = (num * 9) / 5 + 32 + toUnit.textContent;
    } else if (toUnit.textContent === "K") {
      answer = num + 273.16 + toUnit.textContent;
    } else {
      answer = num + toUnit.textContent;
    }
  } else if (fromUnit.textContent === "F") {
    if (toUnit.textContent === "C") {
      answer = ((num - 32) * 5) / 9 + toUnit.textContent;
    } else if (toUnit.textContent === "K") {
      answer = ((num - 32) * 5) / 9 + 273.16 + toUnit.textContent;
    } else {
      answer = num + toUnit.textContent;
    }
  } else if (fromUnit.textContent === "K") {
    if (toUnit.textContent === "C") {
      answer = num - 273.16 + toUnit.textContent;
    } else if (toUnit.textContent === "F") {
      answer = ((num - 273.16) * 9) / 5 + 32 + toUnit.textContent;
    } else {
      answer = num + toUnit.textContent;
    }
  }

  let ansDisplay = document.getElementById("answer");
  ansDisplay.textContent = answer;
}
