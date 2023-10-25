/* A function is a block of code designed to perform a particular task. A function is executed when something invokes it (call it) */


// definition of a function 
function greet(name) {
  console.log("hello", name);
}

// function with parameters adn return statement
function sum(num1, num2) {
  return num1 + num2;
}

// Calling a function
greet("cesar");

// storing the value of the return function in a variable
result = sum(2, 2)
console.log("result:", result);


// rest parameters, represents an indefinite number of parameters (pack arguments into an array)

function multiplication(...numbers) {
  let total = 1;
  for (let number of numbers) {
    total *= number;
  }

  console.log("total", total);
}

multiplication(5, 5, 5);




