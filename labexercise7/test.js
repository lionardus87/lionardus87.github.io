const prompt = require("prompt-sync")();

// Get user to input numbers
const a = prompt("Enter First number: ");
const b = prompt("Enter Second number: ");

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function divide(a, b) {
  return b / a;
}
function multiple(a, b) {
  return a * b;
}

function testSum() {
  if (plus(4, 3) === 7 && plus(0, 5) === 5) {
    return true;
  } else {
    return false;
  }
}

function divideZero() {
  if (b == 0) {
    return "Cannot divide zero";
  } else {
    return true;
  }
}

function testMultiple(){
    if(multiple(2,3) === 6 && multiple(-3,3) === -9){
        return true;
    }else{
        return false;
    }
}

console.log("Test for plus function: ", testSum());
console.log("Test for divide function: ", divideZero());
console.log("Test for multiple function: ", testMultiple());

console.log(`Add: ${plus(a, b)}`);
console.log(`Sub: ${minus(a, b)}`);
console.log(`Multipe: ${multiple(a, b)}`);
console.log(`Divide: ${divide(a, b)}`);
