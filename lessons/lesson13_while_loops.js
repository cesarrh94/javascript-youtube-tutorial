/* A while loop repeat some code while some condition is true potentially infinite. */

/* let userName = "";

while (userName == "" || userName == null) {
  userName = window.prompt("enter your name:")
}

console.log("hello", userName); */


/* A D0-while, do something then check the condition, repeat if condition is true.*/

let yourName;

do {
  yourName = window.prompt("enter your name")
} while (yourName == "");

console.log("Hello", yourName);