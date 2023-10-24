// a variable is a container for storing data
// a variable behaves as if it was the value that it contains

// two steps:
// 1. declaration (var, let, constant)
// 2. assignment

let firstName = "cesar";
let age = 28;
let isStudent = false;

console.log("firstName: ", firstName);
console.log("age: ", age);
console.log("Studen: ", isStudent);

document.getElementById("p1").innerHTML = "firstName: " + firstName;
document.getElementById("p2").innerHTML = "age : " + age;
document.getElementById("p3").innerHTML = "Student: " + isStudent;
