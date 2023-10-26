
document.getElementById("submitButton").onclick = function () {

  let temp;

  if (document.getElementById("cButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = fahrenheitToCelsius(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°C";
  } else if (document.getElementById("fButton").checked) {
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = celsiusToFahrenheit(temp);
    document.getElementById("tempLabel").innerHTML = temp + "°F";
  } else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
  }

}


function fahrenheitToCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function celsiusToFahrenheit(temp) {
  return (temp * (9 / 5) + 32);
}