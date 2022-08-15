const buttonContainer = document.querySelector("#calcButtons");
const output = document.querySelector("#output");

//for loops for creating buttons and assinging class and id.
for (i = 1; i <= 16; i++) {
  makeCalcButtons();
}
const buttons = document.querySelectorAll(".numberButtons");
let idNum = 0;
for (const button of buttons) {
  idNum += 1;
  button.setAttribute("id", `A${idNum}`);
}

// calculator buttons
const sevenButton = document.querySelector("#A1");
sevenButton.innerText = "7";
const eightButton = document.querySelector("#A2");
eightButton.innerText = "8";
const nineButton = document.querySelector("#A3");
nineButton.innerText = "9";
const clearButton = document.querySelector("#A4");
clearButton.innerText = "C";
const fourButton = document.querySelector("#A5");
fourButton.innerText = "4";
const fiveButton = document.querySelector("#A6");
fiveButton.innerText = "5";
const sixButton = document.querySelector("#A7");
sixButton.innerText = "6";
const multiplySign = document.querySelector("#A8");
multiplySign.innerText = "x";
const oneButton = document.querySelector("#A9");
oneButton.innerText = "1";
const twoButton = document.querySelector("#A10");
twoButton.innerText = "2";
const threeButton = document.querySelector("#A11");
threeButton.innerText = "3";
const divideSign = document.querySelector("#A12");
divideSign.innerText = "/";
const zeroButton = document.querySelector("#A13");
zeroButton.innerText = "0";
const minusSign = document.querySelector("#A14");
minusSign.innerText = "-";
const addSign = document.querySelector("#A15");
addSign.innerText = "+";
const equalSign = document.querySelector("#A16");
equalSign.innerText = "=";

//object container mathmethods
const mathMethods = {
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  add: (x, y) => x + y,
};

//calculator app()
clearButton.addEventListener("click", () => clearOutput());
sevenButton.addEventListener("click", () => (output.innerText += "7"));
eightButton.addEventListener("click", () => (output.innerText += "8"));
nineButton.addEventListener("click", () => (output.innerText += "9"));
fourButton.addEventListener("click", () => (output.innerText += "4"));
fiveButton.addEventListener("click", () => (output.innerText += "5"));
sixButton.addEventListener("click", () => (output.innerText += "6"));
multiplySign.addEventListener("click", () => (output.innerText += "x"));
oneButton.addEventListener("click", () => (output.innerText += "1"));
twoButton.addEventListener("click", () => (output.innerText += "2"));
threeButton.addEventListener("click", () => (output.innerText += "3"));
divideSign.addEventListener("click", () => (output.innerText += "/"));
zeroButton.addEventListener("click", () => (output.innerText += "0"));
minusSign.addEventListener("click", () => (output.innerText += "-"));
addSign.addEventListener("click", () => (output.innerText += "+"));

//calc app functions code
equalSign.addEventListener("click", () => {
  let arrayOfInput = output.innerText.split("");
  let subtraction = arrayOfInput.indexOf("-");
  let multiplication = arrayOfInput.indexOf("x");
  let addition = arrayOfInput.indexOf("+");
  let division = arrayOfInput.indexOf("/");

  if (arrayOfInput[multiplication] === "x") {
    let values = output.innerText.split("x");
    x = values[0];
    y = values[1];
    if (x.length > 9 || y.length > 9) {
      return (output.innerText = "Error");
    }
    let result = mathMethods.multiply(x, y);
    return (output.innerText = result.toFixed(0));
  } else if (arrayOfInput[subtraction] === "-") {
    let values = output.innerText.split("-");
    x = values[0];
    y = values[1];
    if (x.length > 9 || y.length > 9) {
      return (output.innerText = "Error");
    }
    let result = mathMethods.subtract(x, y);
    return (output.innerText = result.toFixed(0));
  } else if (arrayOfInput[addition] === "+") {
    let values = output.innerText.split("+");
    x = parseInt(values[0]);
    y = parseInt(values[1]);
    if (x.length > 9 || y.length > 9) {
      return (output.innerText = "Error");
    }
    let result = x + y;
    return (output.innerText = result.toFixed(0));
  } else if (arrayOfInput[division] === "/") {
    let values = output.innerText.split("/");
    x = values[0];
    y = values[1];
    if (x.length > 9 || y.length > 9) {
      return (output.innerText = "Error");
    }
    let result = mathMethods.divide(x, y);
    return (output.innerText = result.toFixed(1));
  }
});

// basic functions
function makeCalcButtons() {
  let buttons = document.createElement("button");
  buttons.className = "numberButtons";
  buttonContainer.appendChild(buttons);
}
function clearOutput() {
  output.innerHTML = "";
}
function result(res) {
  output.innerHTML = `${res}`;
}
