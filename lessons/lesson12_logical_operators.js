/* the logical operators give us the ability to check more than condition concurrently 

&& AND (both conditions must be true)
|| OR (Either condition can be true)
! NOT typically is used to reversed a condition's boolean value.

*/

let temp = 15;
let sunny = false;

if (temp > 0 && temp < 30 && sunny) {
  console.log("the weather is good!");
} else {
  console.log("the weather is bad!");
}


let newTemp = 15;
let cloudy = true;

if (!(newTemp > 0)) {
  console.log("it's cold outside");
} else {
  console.log("it's warm outside");
}

if (!cloudy) {
  console.log("it's sunny outside");
} else {
  console.log("it's cloudy outside");
}