// how to accept user input

// easy way
let username = window.prompt("What is your name?");
console.log("username:", username);

// hard way: using html
let firstname;

document.getElementById("myButton").onclick = function () {
    firstname = document.getElementById("myText").value;
    console.log("firstname", firstname);
    document.getElementById("myLabel").innerHTML = "Hello, " + firstname;
}