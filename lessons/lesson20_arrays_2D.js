// multidimensional arrays

let fruits = new Array();
fruits.push("apples")
fruits.push("oranges")
fruits.push("bananas")

let vegetables = new Array("carrots", "onions", "potatoes");
let meats = ["beef", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

// how to access an element
let oneItem = groceryList[0][0];
console.log("accessing item[0][0]:", oneItem);

// changing the value of a item in the array
groceryList[0][0] = "mangoes";
groceryList[2][0] = "pork"
console.log(groceryList);

// looping through a multidimensional array
for (let list of groceryList) {
  for (let item of list) {
    console.log(item);
  }
}