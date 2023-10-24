/* If statement is a basic form of decision making if a condition is true, 
then do something if not, then don't do it */

// the order of the condition statement matters!!!

let age = 12;

if (age >= 65) {
  console.log("you are a senior citizen");
} else if (age >= 18) {
  console.log("you are an adult");
} else if (age < 0) {
  console.log("you are not born yet!");
} else {
  console.log("you are a child");
}


let online = true;

if (online) {
  console.log("you are online");
} else {
  console.log("you are offline");
}