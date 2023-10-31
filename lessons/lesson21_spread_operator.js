/* the spread operator allows an iterable object such as adn array or string to be expanded in places where zero to more arguments are expected (unpacked the elements). */


// example 1:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maxNumber = Math.max(...numbers);
console.log("max number in the array is:", maxNumber);

// example 2:
let class1 = ["Goku", "Vegeta", "Gohan"];
let class2 = ["Naruto", "Sasuke", "Sakura"];

class1.push(...class2);

console.log(class1.length);