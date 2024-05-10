let factorial = 1;

function printFactorial() {
  const inputValue = Number(document.getElementById("input").value);
  const outputValue = findFactorial(inputValue);
  document.getElementById("output").innerHTML = outputValue;
}

function findFactorial(enteredValue) {
  factorial =
    enteredValue > 1
      ? factorial * enteredValue * findFactorial(enteredValue - 1)
      : factorial;
  return factorial;
}

// let array = [1, 2, 3, [5, 6, 7], [8, 9]];
let array = [1, 2, 3, 4, [5, 6]];
// flat

const flatArraySum = array.flat(1).reduce((acc, cV) => {
  acc = acc + cV;
  return acc;
}, 0);
console.log(flatArraySum);

let sum = 0;
console.log(findSum(array));

function findSum(arrayInput) {
  for (let count = 0; count < arrayInput.length; count++) {
    if (typeof arrayInput[count] === "number") {
      sum = sum + arrayInput[count];
    } else {
      findSum(arrayInput[count]);
    }
  }
  return sum;
}

// [2,3,4,6]
// [4,6,8,12]

let filterArray = [1, 2, 3, 4, 5, 6, 7];
const output = filterArray.filter((value) => {
  return value % 2 === 0;
});
console.log(output);

Array.prototype.myFilter = function (cb) {
  let returnArr = [];
  for (let count = 0; count < this.length; count++) {
    if (cb(this[count])) {
      returnArr.push(this[count]);
    }
  }
  return returnArr;
};

function evenNo(value) {
  return value % 2 === 0;
}

const output1 = filterArray.myFilter((value) => value % 2 === 0);
console.log(output1);
