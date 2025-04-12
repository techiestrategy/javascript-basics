// declaring two numbers
let num1 = 12;
let num2 = 4;

// doing the math
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// building the output string
let output = `
  <strong>Number 1:</strong> ${num1} <br>
  <strong>Number 2:</strong> ${num2} <br><br>
  <strong>Sum:</strong> ${sum} <br>
  <strong>Difference:</strong> ${difference} <br>
  <strong>Product:</strong> ${product} <br>
  <strong>Quotient:</strong> ${quotient}
`;

// showing it in an html div
document.getElementById("results").innerHTML = output;
