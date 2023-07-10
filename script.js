function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsius = (fahrenheitInput.value - 32) * 5 / 9;
    var celsiusInput = document.getElementById("celsius");
    celsiusInput.value = celsius.toFixed(2);
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheit = (celsiusInput.value * 9 / 5) + 32;
    var fahrenheitInput = document.getElementById("fahrenheit");
    fahrenheitInput.value = fahrenheit.toFixed(2);
  }