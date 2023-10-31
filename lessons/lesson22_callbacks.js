// A callback is a function that you pass into another function as an argument to be executed after doing something, (or any task has been completed). Using callbacks it ensure that a function is not going to run before a task is completed.

function modify(array, callback) {
  // doing something
  console.log(`array length: ${array.length}`);
  array.push('cesar');

  // after doing something...(callback invocation)
  callback(array);
}

let names = ["jennifer", "marcos", "rosa"];

modify(names, function (array) {
  console.log(`the array has been modified and now it has ${array.length} elements.`);
});