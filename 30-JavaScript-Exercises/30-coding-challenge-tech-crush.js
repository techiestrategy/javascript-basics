// 1
function showName() {
  let myName = "Mustapha Yusuff"; 
  alert("My Name is: " + myName); 
}

//2
function handleMathOperations() {
  // Get user input values
  const num1 = parseFloat(document.getElementById('input1').value);
  const num2 = parseFloat(document.getElementById('input2').value);

  // Check if the inputs are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("results").innerHTML = "<span style='color: red;'>Please enter valid numbers in both fields.</span>";
    return;
  }

  // Calculate the sum, difference, product, and quotient
  const sum = num1 + num2;
  const difference = Math.ceil(num1 - num2);
  const product = num1 * num2;
  const quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Undefined (division by zero)';

  // Create the output HTML string
  const output = `
    <div><strong>Number 1:</strong> ${num1}</div>
    <div><strong>Number 2:</strong> ${num2}</div>
    <hr>
    <div><strong>Sum:</strong> ${sum}</div>
    <div><strong>Difference:</strong> ${difference}</div>
    <div><strong>Product:</strong> ${product}</div>
    <div><strong>Quotient:</strong> ${quotient}</div>
  `;

  // Display the output in the results div
  document.getElementById("results").innerHTML = output;
}



//3

function convertTemp() {
  // grab the input value
  let celsius = document.getElementById("celsiusInput").value;

  //ensure it's a number
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

  // Do basic validation here
  if (isNaN(length) || isNaN(width)) {
    document.getElementById("areaResult").innerHTML = "Please enter valid numbers for both fields.";
    return;
  }

  // calculate area
  let area = length * width;

  // display result in a div
  document.getElementById("areaResult").innerHTML = 
    `The area of the rectangle is <strong>${area}</strong> square meters.`;
}


//5

function checkEvenOrOdd() {
  // Get the value from the input field
  let number = parseInt(document.getElementById("numberInput").value);

  // Basic validation to check if the input is a valid number
  if (isNaN(number)) {
    document.getElementById("result").innerHTML = "Please enter a valid number.";
    return;
  }

  // Check if the number is even or odd 
  //this % is called modulus
  if (number % 2 === 0) {
    document.getElementById("result").innerHTML = `${number} is an Even number.`;
  } else {
    document.getElementById("result").innerHTML = `${number} is an Odd number.`;
  }
}

//6

function checkLeapYear() {
  // Get the year from the input field
  let year = parseInt(document.getElementById("yearInput").value);

  // Basic validation to check if the input is a valid number
  if (isNaN(year)) {
    document.getElementById("result").innerHTML = "Please enter a valid year.";
    return;
  }

  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.getElementById("result").innerHTML = `${year} is a Leap Year.`;
  } else {
    document.getElementById("result").innerHTML = `${year} is not a Leap Year.`;
  }
}

//7
function reverseString() {
  // Get the string from the input field
  let inputString = document.getElementById("stringInput").value;

  // Reverse the string using split, reverse, and join methods
  let reversedString = inputString.split('').reverse().join('');

  // Display the reversed string in the result div
  document.getElementById("result").innerHTML = `Reversed String: ${reversedString}`;
}

//8

function countVowels() {
  // Get the input string
  let inputString = document.getElementById("stringInput").value;

  // Initialize vowel count
  let vowelCount = 0;

  // Define vowels
  const vowels = 'aeiouAEIOU';

  // Loop through each character in the string
  for (let i = 0; i < inputString.length; i++) {
    // Check if the character is a vowel
    if (vowels.indexOf(inputString[i]) !== -1) {
      vowelCount++;
    }
  }

  // Display the result
  document.getElementById("result").innerHTML = `Number of vowels: ${vowelCount}`;
}


//9

function findLargestNumber() {
  // Get the input string, split it into an array, and convert each element to a number
  let numbersArray = document.getElementById("numbersInput").value.split(',').map(Number);

  // Check if the array has exactly 5 numbers
  if (numbersArray.length !== 5 || numbersArray.some(isNaN)) {
    document.getElementById("result").innerHTML = "Please enter exactly 5 valid numbers.";
    return;
  }

  // Find the largest number using Math.max ...spread operator
  let largestNumber = Math.max(...numbersArray);

  // Display the largest number
  document.getElementById("result").innerHTML = `The largest number is: ${largestNumber}`;
}

//10

function isPalindrome(str) {
  let cleaned = '';
  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (/[a-zA-Z0-9]/.test(char)) {
          cleaned += char.toLowerCase();
      }
  }

  let reversed = '';
  for (let i = cleaned.length - 1; i >= 0; i--) {
      reversed += cleaned[i];
  }

  return cleaned === reversed;
}

// Hook for the button click
function checkPalindrome() {
  const input = document.getElementById('palindrome-input').value;
  const result = isPalindrome(input);
  const output = document.getElementById('result');

  if (input.trim() === '') {
      output.textContent = 'Please enter a word or phrase.';
      output.style.color = 'orange';
  } else if (result) {
      output.textContent = `"${input}" is a palindrome! 🎉`;
      output.style.color = 'green';
  } else {
      output.textContent = `"${input}" is not a palindrome. 😢`;
      output.style.color = 'red';
  }
}


//11

function runFactorialChallenge() {
  const input = document.getElementById('factorial-input').value;
  const num = parseInt(input);
  const resultEl = document.getElementById('factorial-result');

  if (isNaN(num)) {
      resultEl.textContent = 'Please enter a valid number.';
      resultEl.style.color = 'orange';
  } else if (num < 0) {
      resultEl.textContent = 'Factorial is not defined for negative numbers.';
      resultEl.style.color = 'red';
  } else {
      const result = calculateFactorial(num);
      resultEl.textContent = `${num}! = ${result}`;
      resultEl.style.color = 'green';
  }
}

function calculateFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
      result *= i;
  }
  return result;
}


//12

function runRandomNumberChallenge() {
  const minInput = document.getElementById('min-value').value;
  const maxInput = document.getElementById('max-value').value;
  const resultEl = document.getElementById('random-result');

  const min = parseInt(minInput);
  const max = parseInt(maxInput);

  if (isNaN(min) || isNaN(max)) {
      resultEl.textContent = 'Please enter valid numbers.';
      resultEl.style.color = 'orange';
  } else if (min > max) {
      resultEl.textContent = 'Min value should be less than or equal to max value.';
      resultEl.style.color = 'red';
  } else {
      const randomNumber = generateRandomNumber(min, max);
      resultEl.textContent = `🎲 Your random number: ${randomNumber}`;
      resultEl.style.color = 'green';
  }
}

function generateRandomNumber(min, max) {
  // Math.random() returns a float from 0 to <1, so we scale it to the desired range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//13

function runTimeConverterChallenge() {
  const input = document.getElementById('seconds-input').value;
  const totalSeconds = parseInt(input);
  const resultEl = document.getElementById('time-result');

  if (isNaN(totalSeconds) || totalSeconds < 0) {
      resultEl.textContent = 'Please enter a valid non-negative number of seconds.';
      resultEl.style.color = 'orange';
  } else {
      const time = convertSeconds(totalSeconds);
      resultEl.textContent = `${totalSeconds} seconds = ${time.hours}h ${time.minutes}m ${time.seconds}s`;
      resultEl.style.color = 'green';
  }
}

function convertSeconds(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
      hours,
      minutes,
      seconds
  };
}

//14

function runPrimeCheckerChallenge() {
  const input = document.getElementById('prime-input').value;
  const num = parseInt(input);
  const resultEl = document.getElementById('prime-result');

  if (isNaN(num) || num < 1) {
      resultEl.textContent = 'Please enter a valid positive number.';
      resultEl.style.color = 'orange';
  } else {
      const isPrime = checkIfPrime(num);
      resultEl.textContent = isPrime
          ? `${num} is a prime number. ✅`
          : `${num} is not a prime number. ❌`;
      resultEl.style.color = isPrime ? 'green' : 'red';
  }
}

function checkIfPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}


//15

function runCapitalizeWordsChallenge() {
  const input = document.getElementById('capitalize-input').value;
  const resultEl = document.getElementById('capitalized-result');

  if (!input.trim()) {
      resultEl.textContent = 'Please enter a sentence.';
      resultEl.style.color = 'orange';
      return;
  }

  const capitalized = capitalizeWords(input);
  resultEl.textContent = capitalized;
  resultEl.style.color = 'green';
}

function capitalizeWords(sentence) {
  return sentence
      .split(' ')
      .map(word => {
          if (word.length === 0) return '';
          return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
}


//16

function runSumOfNumbersChallenge() {
  const input = document.getElementById('sum-input').value;
  const n = parseInt(input);
  const resultEl = document.getElementById('sum-result');

  if (isNaN(n) || n <= 0) {
      resultEl.textContent = 'Please enter a positive integer.';
      resultEl.style.color = 'orange';
  } else {
      const sum = calculateSum(n);
      resultEl.textContent = `The sum of numbers from 1 to ${n} is ${sum}.`;
      resultEl.style.color = 'green';
  }
}

function calculateSum(n) {
  // Formula for sum of first n numbers: sum = n * (n + 1) / 2
  return (n * (n + 1)) / 2;
}


//17

function runAverageOfNumbersChallenge() {
  const input = document.getElementById('numbers-input').value;
  const numbers = input.split(',').map(num => parseFloat(num.trim()));
  const resultEl = document.getElementById('average-result');

  if (numbers.some(isNaN)) {
      resultEl.textContent = 'Please enter valid numbers separated by commas.';
      resultEl.style.color = 'orange';
      return;
  }

  const average = calculateAverage(numbers);
  resultEl.textContent = `The average of the numbers is ${average}.`;
  resultEl.style.color = 'green';
}

function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}


//18

function runRemoveDuplicatesChallenge() {
  const input = document.getElementById('array-input').value;
  const array = input.split(',').map(item => item.trim());
  const resultEl = document.getElementById('duplicates-result');

  if (array.some(item => item === "")) {
      resultEl.textContent = 'Please enter a valid array with values separated by commas.';
      resultEl.style.color = 'orange';
      return;
  }

  const uniqueArray = removeDuplicates(array);
  resultEl.textContent = `Array without duplicates: [${uniqueArray.join(', ')}]`;
  resultEl.style.color = 'green';
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


//19

function runCountdownChallenge() {
  const resultEl = document.getElementById('countdown-result');
  let countdown = 10;

  const intervalId = setInterval(() => {
      resultEl.textContent = countdown;
      countdown--;

      if (countdown < 0) {
          clearInterval(intervalId);
          resultEl.textContent = 'Blast off!';
      }
  }, 1000);
}

//20
function runOnlyNumbersChallenge() {
  const input = document.getElementById('input-string').value;
  const resultEl = document.getElementById('result');

  if (isOnlyNumbers(input)) {
      resultEl.textContent = `"${input}" contains only numbers. ✔️`;
      resultEl.style.color = 'green';
  } else {
      resultEl.textContent = `"${input}" contains non-numeric characters. ❌`;
      resultEl.style.color = 'red';
  }
}

function isOnlyNumbers(str) {
  return /^\d+$/.test(str);  // Uses regular expression to check if the string is made up of digits only
}


//21

function findSecondSmallest(arr) {
  if (arr.length < 2) return null;

  let min = Infinity;
  let second = Infinity;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          second = min;
          min = arr[i];
      } else if (arr[i] > min && arr[i] < second) {
          second = arr[i];
      }
  }

  return second === Infinity ? null : second;
}

function inputToFindSecondSmallestNum() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
      output.textContent = "Please enter a list of numbers.";
      return;
  }

  // Convert string to array of numbers
  const arr = input.split(",").map(str => parseFloat(str.trim())).filter(n => !isNaN(n));

  if (arr.length < 2) {
      output.textContent = "Please enter at least two valid numbers.";
      return;
  }

  const result = findSecondSmallest(arr);
  output.textContent = result !== null
      ? "Second smallest number: " + result
      : "No second smallest number found.";
}

//22

function displayMultiplicationTable() {
  const number = document.getElementById("numberInput").value;
  const multiplicationTableDiv = document.getElementById("multiplicationTable");

  if (number === "") {
      multiplicationTableDiv.textContent = "Please enter a number.";
      return;
  }

  const num = parseInt(number);

  if (isNaN(num)) {
      multiplicationTableDiv.textContent = "Invalid input. Please enter a valid number.";
      return;
  }

  let table = "";
  for (let i = 1; i <= 12; i++) {
      table += `${num} x ${i} = ${num * i}\n`;
  }

  multiplicationTableDiv.textContent = table;
}

//23

function validatePassword() {
  const password = document.getElementById("passwordInput").value;
  const messageDiv = document.getElementById("message");

  function isPasswordValid(password) {
      if (password.length < 8) {
          return false;
      }

      let hasUpperCase = false;
      let hasLowerCase = false;
      let hasNumber = false;

      for (let i = 0; i < password.length; i++) {
          const char = password[i];
          if (char >= 'A' && char <= 'Z') {
              hasUpperCase = true;
          } else if (char >= 'a' && char <= 'z') {
              hasLowerCase = true;
          } else if (char >= '0' && char <= '9') {
              hasNumber = true;
          }
      }

      return hasUpperCase && hasLowerCase && hasNumber;
  }

  if (isPasswordValid(password)) {
      messageDiv.textContent = "Password is valid!";
  } else {
      messageDiv.textContent = "Password is invalid. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
  }
}


//24

function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = "";

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero.";
        break;
    }
  }

  document.getElementById("result").innerText = "Result: " + result;
}

//25

function findFactors(num) {
  // check input is a valid positive number
  if (typeof num !== "number" || num < 1 || !Number.isInteger(num)) {
    displayOutput("Please enter a valid positive integer.");
    return;
  }

  const factors = [];

  // loop to find factors
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);

      const pair = num / i;
      if (pair !== i) {
        factors.push(pair);
      }
    }
  }

  // Sort for neatness
  factors.sort((a, b) => a - b);

  // Display the result in the div
  displayOutput(`Factors of ${num}: ${factors.join(', ')}`);
}

// Function to handle the input and call findFactors
function handleInput() {
  const inputElement = document.getElementById('inputNumber');
  const inputValue = parseInt(inputElement.value, 10);

  // Check if the input is a valid number
  if (isNaN(inputValue)) {
    displayOutput("Please enter a valid number.");
  } else {
    findFactors(inputValue);
  }
}

// Function to display the result in the 'result' div
function displayOutput(message) {
  const resultDiv = document.getElementById('result');
  if (resultDiv) {
    resultDiv.textContent = message;
  } else {
    // fallback, should not happen
    alert(message);
  }
}


//26

function checkAnagram() {
  // Get the input values
  const str1 = document.getElementById('inputString1').value.trim();
  const str2 = document.getElementById('inputString2').value.trim();

  // Check if the strings are valid (non-empty)
  if (!str1 || !str2) {
    displayOutput("Please enter both strings.");
    return;
  }

  // Normalize by sorting characters in both strings and comparing
  if (normalizeString(str1) === normalizeString(str2)) {
    displayOutput(`"${str1}" and "${str2}" are anagrams!`);
  } else {
    displayOutput(`"${str1}" and "${str2}" are not anagrams.`);
  }
}

// Helper function to normalize strings: lowercase and sort characters
function normalizeString(str) {
  return str.toLowerCase().split('').sort().join('');
}

// Function to display the result in the 'result' div
function displayOutput(message) {
  const resultDiv = document.getElementById('result');
  if (resultDiv) {
    resultDiv.textContent = message;
  } else {
    // fallback, should not happen
    alert(message);
  }
}


//27

function generateFibonacci() {
  const n = parseInt(document.getElementById('terms').value.trim(), 10);

  // Validate input
  if (isNaN(n) || n < 1) {
    displayOutput("Please enter a valid positive number.");
    return;
  }

  const fibSequence = [];
  let a = 0, b = 1;

  // Generate Fibonacci sequence up to n terms
  for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
  }

  // Display the result
  displayOutput(`Fibonacci sequence up to ${n} terms: ${fibSequence.join(', ')}`);
}

// Function to display the result in the 'result' div
function displayOutput(message) {
  const resultDiv = document.getElementById('result');
  if (resultDiv) {
    resultDiv.textContent = message;
  } else {
    // fallback, should not happen
    alert(message);
  }
}


//28

function sortArray() {
  // Get the input and convert it into an array of numbers
  const inputString = document.getElementById('arrayInput').value.trim();
  const numArray = inputString.split(',').map(num => parseFloat(num.trim()));

  // Validate if the input is an array of valid numbers
  if (numArray.some(isNaN)) {
    displayOutput("Please enter a valid list of numbers.");
    return;
  }

  // Sort the array using bubble sort algorithm
  bubbleSort(numArray);

  // Display the sorted array
  displayOutput(`Sorted array: ${numArray.join(', ')}`);
}

// Bubble Sort algorithm
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they're in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

// Function to display the result in the 'result' div
function displayOutput(message) {
  const resultDiv = document.getElementById('result');
  if (resultDiv) {
    resultDiv.textContent = message;
  } else {
    // fallback, should not happen
    alert(message);
  }
}


//29

function countElement() {
  const arrayStr = document.getElementById('arrayInput').value.trim();
  const target = document.getElementById('elementInput').value.trim();

  if (!arrayStr || !target) {
    displayOutput("Please fill in both the array and the element to count.");
    return;
  }

  const array = arrayStr.split(',').map(el => el.trim());

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      count++;
    }
  }

  displayOutput(`The element "${target}" appears ${count} time(s) in the array.`);
}

// Reusing displayOutput function
function displayOutput(message) {
  const resultDiv = document.getElementById('result');
  if (resultDiv) {
    resultDiv.textContent = message;
  } else {
    alert(message);
  }
}


//30

// Cart will be stored as an array of item objects
const cart = [];

function addItem() {
  const nameInput = document.getElementById('itemName');
  const priceInput = document.getElementById('itemPrice');

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!name || isNaN(price) || price < 0) {
    alert("Please enter a valid item name and price.");
    return;
  }

  cart.push({ name, price });
  nameInput.value = '';
  priceInput.value = '';

  updateCartDisplay();
}

function removeItem() {
  const nameInput = document.getElementById('itemName');
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter the name of the item to remove.");
    return;
  }

  const index = cart.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) {
    cart.splice(index, 1);
    updateCartDisplay();
  } else {
    alert(`Item "${name}" not found in the cart.`);
  }

  nameInput.value = '';
}

function updateCartDisplay() {
  const cartList = document.getElementById('cartList');
  const totalPriceElem = document.getElementById('totalPrice');

  // Clear existing list
  cartList.innerHTML = '';

  let total = 0;

  // Render each item in the list
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalPriceElem.textContent = total.toFixed(2);
}
