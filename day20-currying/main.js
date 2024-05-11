/*
Curring can be done in two ways
    1. using bind method
    2. using closure  
 */
// using bind
function multiplyUsingBind(a, b) {
  return a * b;
}

console.log(multiplyUsingBind(4, 5));

const multipleByTwo = multiplyUsingBind.bind(this);
console.log(multipleByTwo(2, 3));

const multipleByTwo1 = multiplyUsingBind.bind(this, 2);
console.log(multipleByTwo1(3));

// using closure
function multiplyUsingClosure(a) {
  return function multiplyByTwo(b) {
    console.log(a, b);
    return a * b;
  };
}

console.log(multiplyUsingClosure(5)(6));
