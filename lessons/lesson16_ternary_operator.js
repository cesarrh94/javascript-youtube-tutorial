/* the ternary operator is a shortcut for an if/else statement adn takes 3 operands:
1. a condition with ?
2. expression if true :
3. expression if false 

syntax:  condition ? trueExpression : falseExpression
*/

function checkAge(age) {

  let isAdult;

  if (age >= 18) {
    isAdult = true;
  } else {
    isAdult = false;
  }

  return isAdult;
}

let adult = checkAge(21)
console.log("is and adult?", adult);

// usage of the ternary operator
let age = 17
adult = (age >= 18) ? true : false;
console.log("is and adult (ternary)", adult);