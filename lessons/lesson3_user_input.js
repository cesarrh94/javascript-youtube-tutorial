// how to accept user input

// easy way
let username = window.prompt("What is your name?");
console.log("username:", username);

// hard way: using html
let firstName;

document.getElementById("myButton").onclick = function () {
  firstName = document.getElementById("myText").value;
  console.log("firstName", firstName);
  document.getElementById("myLabel").innerHTML = "Hello, " + firstName;
};
