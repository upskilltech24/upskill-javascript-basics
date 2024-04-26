/*
Scope-

Block scope
Function scope
Global scope

 */
var localVar = 4;
// Global scope
var globalVar = 100;

console.log(localVar);
learningScope1();
learningScope2();
console.log(localVar);

function learningScope1() {
  // Function scope
  var localVar = 5;
  console.log(localVar);
  console.log(globalVar);
  if (true) {
    // Block scope
    let blockScope = 5;
    var blockScope1 = 6;
    console.log("let accessing outside -> blockScope", blockScope);
  }
  console.log("var accessing outside -> blockScope", blockScope1);
  console.log(globalVar);
}

// console.log("var accessing outside function ", blockScope1);

function learningScope2() {
  var localVar = 5;
  console.log(localVar);
  console.log(globalVar);
}

function mark1() {
  total = 100; // act as global scope
  console.log(total);
}

function mark2() {
  console.log(total);
}

function getTotal() {
  console.log(total);
}

mark1();
mark2();
getTotal();
