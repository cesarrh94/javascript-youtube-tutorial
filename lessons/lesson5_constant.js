// A constant is a variable that cannot be change.

const PI = 3.1416;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a cricle:");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("the circumference is ", circumference);