// An array is a variable that can store multiple values of the same type
// In order to access to a specific value in the array, the usage of the index is needed.

let fruits = ["apple", "banana", "orange"];

console.log(fruits); // this prints the representation of the array
console.log(fruits[0]); // accessing the first element in the array
console.log(fruits[2]); // accessing the last element in the array

// changing the value of the first element
fruits[0] = 'coconut';
console.log(fruits[0]);

// adding an element at the end of the list
fruits.push("kiwi");
console.log(fruits);

// removing the last element in the list
let fruit = fruits.pop()
console.log("element removed:", fruit);

// appending an element to the beginning of the list
fruits.unshift("peach");
console.log("appending an element:", fruits);

// removing the first element of the list
fruit = fruits.shift()
console.log("element removed:", fruit);

// accessing to the length of an array
console.log("length:", fruits.length);

// get the index of an element on the list
let index = fruits.indexOf("banana");
console.log("index", index);


// How to loop through an array
let favoriteNumbers = [1, 2, 4, 7, 10, 11, 23, 24];

for (let i = 0; i < favoriteNumbers.length; i++) {
  console.log(`favorite number#${i}: ${favoriteNumbers[i]}`);
}

// alternative
for (let number of favoriteNumbers) {
  console.log(number);
}


// How to sort an array alphabetically
fruits.sort()
console.log("sorting alphabetical order:", fruits);
fruits.sort().reverse()
console.log("reversed sorting:", fruits);