/* template literals are delimited with `` (backticks) instead of double or single quotes allows embedded variables adn expression. */

let userName = "cesar";
let email = "test@testmail.com";
let age = 28;

console.log("hello,", userName);
console.log("you are", age, "years old");
console.log("your email is", email);

// usage of template literals
let userInfo = `hello ${userName.toUpperCase()}, you are ${age} years old and your email is ${email}`
console.log(userInfo);

