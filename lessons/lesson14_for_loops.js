// For loop repeat some code a certain amount of times.


// break statement = breaks out of a loop entirely
// continue = skip an iteration of a loop


for (let counter = 1; counter <= 10; counter++) {
  if (counter == 4) {
    // break;
    continue;
  }
  console.log("counter", counter);
}


// Nested loops
let symbol = window.prompt("enter a symbol to use");
let rows = window.prompt("enter the numbers of rows")
let columns = window.prompt("enter the number of columns")

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    document.getElementById("myRectangle").innerHTML += j;
  }
  document.getElementById("myRectangle").innerHTML += "<br>"
}
