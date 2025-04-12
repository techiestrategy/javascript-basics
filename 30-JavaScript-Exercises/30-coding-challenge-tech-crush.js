// 1
function showName() {
  let myName = "Mustapha Yusuff"; 
  alert("My Name is: " + myName); 
}

//2
// declaring two numbers
let num1 = 12;
let num2 = 4;

// doing the math
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// building the output string like a regular human might
let output = `
  <strong>Number 1:</strong> ${num1} <br>
  <strong>Number 2:</strong> ${num2} <br><br>
  <strong>Sum:</strong> ${sum} <br>
  <strong>Difference:</strong> ${difference} <br>
  <strong>Product:</strong> ${product} <br>
  <strong>Quotient:</strong> ${quotient}
`;

// dropping it into the div
document.getElementById("results").innerHTML = output;


//3

function convertTemp() {
  // grab the input value
  let celsius = document.getElementById("celsiusInput").value;

  // make sure it's a number
  if (celsius === "" || isNaN(celsius)) {
    document.getElementById("result").innerHTML = "Please enter a valid number.";
    return;
  }

  // calculate fahrenheit
  let fahrenheit = (celsius * 9/5) + 32;

  // display result
  document.getElementById("result").innerHTML = 
    `${celsius}°C is equal to <strong>${fahrenheit.toFixed(2)}°F</strong>`;
}


//4

function calculateArea() {
  // grab values from inputs
  let length = parseFloat(document.getElementById("lengthInput").value);
  let width = parseFloat(document.getElementById("widthInput").value);

  // basic validation
  if (isNaN(length) || isNaN(width)) {
    document.getElementById("areaResult").innerHTML = "Please enter valid numbers for both fields.";
    return;
  }

  // calculate area
  let area = length * width;

  // show result
  document.getElementById("areaResult").innerHTML = 
    `The area of the rectangle is <strong>${area}</strong> square meters.`;
}
