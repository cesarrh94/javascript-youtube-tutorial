/* Switch is a statement that examines a value for match against many case clauses.  more efficient that many "else if" statement */

let grade = "k";
let newGrade = 101;

// A comparison cal also be store as a case!
switch (true) {
  // case "a":
  case (newGrade >= 90 && newGrade < 100):
    console.log("you did great!");
    break;
  // case "b":
  case (newGrade >= 80 && newGrade < 90):
    console.log("you did good!");
    break;
  // case "c":
  case (newGrade >= 70 && newGrade < 80):
    console.log("you did okay!");
    break;
  // case "d":
  case (newGrade >= 60 && newGrade < 70):
    console.log("you barely pass!");
    break;
  // case "f":
  case (newGrade < 60):
    console.log("you failed!");
    break;
  default:
    // console.log(grade, "is not a letter grade!");
    console.log(newGrade, "is not a grade!");
    break;
}