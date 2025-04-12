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
  