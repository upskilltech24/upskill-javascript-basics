let greetingMessage; // Declaration
greetingMessage = "Hi Team!"; // Assignment
let a = 10;
const b = 20;
let count = 0;
{
  let count = 8;
  //console.log(count);
}
{
  let count = 2;
  //console.log(count);
}
//console.log(count);

const count1 = 0;
{
  const count1 = 8;
  //console.log(count1);
}
{
  const count1 = 2;
  //console.log(count1);
}
//console.log(count1);

var count2 = 0;
var count2 = 10;
console.log(count2);
{
  var count2 = 8;
  console.log(count2);
}
{
  var count2 = 2;
  console.log(count2);
}
console.log(count2);

function hello() {
  let test = 1;
  greetingMessage = "Hi team! Welcome";
  a = 20;
  //console.log(test);
}

function helloTN() {
  let test = 2;
  //console.log(test);
}
// Let
/*
block scope
we can re assign 
we cannot re declare inside same block
 */

function add(a, b) {
  return a + b;
}

var add1 = function add(a, b) {
  return a + b;
};

var add2 = (a, b) => a + b;

function printAnswer(a, b) {
  var calc = add1(a, b);
  console.log(calc);
}

function printAnswer1(a, b) {
  var calc = add(a, b);
  console.log(calc);
}

function printAnswer3(a, b) {
  var calc = add2(a, b);
  console.log(calc);
}

printAnswer(4, 5);
printAnswer1(5, 5);
printAnswer3(5, 6);

let message = "This is class on";
let classTopic = "JS";
let addedString = message + " " + classTopic;
console.log(addedString);
let addedString1 = `${message} ${classTopic}`;
console.log(addedString1);

function printInConsole() {
  console.log("Hi");
}

// printInConsole();

// for (let count = 0; count < 10; count++) {
//   printInConsole();
// }

// const timer = setInterval(printInConsole, 1000);

function clearTimer() {
  clearInterval(timer);
}

const timeOutTimer = setTimeout(printInConsole, 10000);

function clearTimer() {
  clearInterval(timer);
}

function clearTimeoutTimer() {
  clearTimeout(timeOutTimer);
}

function calculate(type) {
  if (type === "add") {
    var addedValue =
      Number(document.getElementById("number1").value) +
      Number(document.getElementById("number2").value);
  } else if (type === "sub") {
    var addedValue =
      Number(document.getElementById("number1").value) -
      Number(document.getElementById("number2").value);
  }
  console.log(addedValue);
}

let counter;
let loaders;
let timer;
function startLoader() {
  counter = 0;
  loaders = document.getElementsByClassName("loader");
  for (let count = 0; count < loaders.length; count++) {
    loaders[count].style.display = "none";
  }
  timer = setInterval(manageLoader, 1000);
}

function stopLoader() {
  clearInterval(timer);
}

function manageLoader() {
  counter = counter + 1;
  if (counter % 5 === 1) {
    for (let count = 0; count < loaders.length; count++) {
      loaders[count].style.display = "none";
    }
    loaders[0].style.display = "block"; //1sec
  } else if (counter % 5 === 2) {
    loaders[1].style.display = "block"; // 2 sec
  } else if (counter % 5 === 3) {
    loaders[2].style.display = "block"; // 2 sec
  } else if (counter % 5 === 4) {
    loaders[3].style.display = "block"; // 2 sec
  } else if (counter % 5 === 0) {
    loaders[4].style.display = "block"; // 2 sec
  }
}

function indexOfArray() {
  var array = [1, 2, 3, 5];
  console.log(array.indexOf(1232));
}
indexOfArray();

function indexOfString() {
  var str = "This is a JS session";
  console.log(str.indexOf("JS1"));
}
indexOfString();
function isPalindrome() {
  let stringToTest = "tteyyett4";
  let isPalindrome = true;
  for (let count = 0; count < stringToTest.length / 2; count++) {
    console.log(count, stringToTest.length - 1 - count);
    if (stringToTest[count] !== stringToTest[stringToTest.length - 1 - count]) {
      isPalindrome = false;
    }
  }

  if (!isPalindrome) {
    console.log("Not a palindrome");
  } else {
    console.log("palindrome");
  }
}

isPalindrome();

function readName() {
  document.getElementById("nameElement").innerHTML = "Upskill Tech.";
  console.log(document.getElementById("nameElement").innerHTML);
}

function multiplyBy2() {
  var sampleString = "Test 'Election'";
  var collection = document.getElementsByClassName("content");
  for (let count = 0; count < collection.length; count++) {
    var currentValue = collection[count].innerHTML;
    collection[count].innerHTML = currentValue * 2;
  }
}

function printDate() {
  document.getElementById("dateContainer").innerHTML = new Date();
}

function printDate1() {
  var collection = document.getElementsByClassName("dateObj");
  for (count = 0; count < collection.length; count++) {
    collection[count].innerHTML = new Date();
  }
}

function usingStrings() {
  let sampleString = 'Alphabets starts with \\ "ABCDEFGH"';
  console.log(sampleString);
  console.log(sampleString.length); //8
  console.log(sampleString[sampleString.length]); // undefined
  console.log(sampleString[sampleString.length - 1]); // H

  let sampleString1 = "test";
  let sampleString2 = new String("test");
  console.log(sampleString1 == sampleString2); // true
  console.log(sampleString1 === sampleString2); // false
  let sampleString3 = new String("test");
  console.log(sampleString3 == sampleString2); // false
  let obj1 = { name: "Upskill" };
  let obj2 = { name: "Upskill" };

  console.log(obj1 === obj2); // false
  console.log(obj1.name === obj2.name); // true
}

const testString = "aABCD";
const testArray = [1, 2, 3, 4];
console.log("Length - ", testString.length);
console.log("Char At - ", testString.charAt(0)); // A
console.log("Char At - ", testString.charAt(testString.length - 1)); // D
console.log("Char At - ", testString.charAt(50)); // null
console.log("Char code At - ", testString.charCodeAt(0)); // 65
console.log(" At - ", testString.at(0)); // a
console.log(" At - ", testString.at(-2)); // C
// A - 65, B - 66 , a - 97, b - 98
console.log("Array - Find a value in particular index - ", testArray[50]); // undefined
console.log(
  "Array - Find a index of particular index - ",
  testArray.indexOf(78)
); // -1
testArray[1] = 22;
console.log(testArray);
testString[0] = "A";
console.log(testString);
console.log("Slice - ", testString.slice(0, 2)); // aA
console.log("Slice without end index - ", testString.slice(2)); // BCD
console.log("ABCDEFGHIJK".slice(-4)); // HIJK
console.log("ABCDEFGHIJK".slice(-4, -1)); // HIJ
console.log("ABCDEFGHIJK".substring(0, 4)); // ABCD
console.log("ABCDEFGHIJK".substring(-4, 4)); // ABCD => -4 will be treated as 0
console.log("ABCDEFGHIJK".substr(0, 10)); // ABCDEFGHIJ
console.log("ABCDEFGHIJK".substr(-3, 10)); // IJK
console.log("ABCD".concat("-", "DEF")); // ABCDEF

const phoneNo = (9123456789).toString();
const part1 = phoneNo.substr(0, 4);
const part2 = phoneNo.substr(4, 3);
const part3 = phoneNo.substr(7, 3);
console.log(part1.concat("-", part2).concat("-", part3));
const updatedValue = phoneNo.padStart(20, "X");
console.log(); // XXXXXXXXXX9123456789
console.log(phoneNo.padStart(10, "X")); // 9123456789
console.log(phoneNo, updatedValue);
console.log("733179904343".slice(0, 4).padEnd(12, "X")); // 7331XXXXXXXX
console.log("AAA-BBB-CCC-DDD".replace("-", "*")); // AAA*BBB-CCC-DDD
console.log("AAA-BBB-CCC-DDD".replaceAll("-", "*")); // AAA*BBB*CCC*DDD
console.log("AAA-BBB-CCC-DDD".replace(/-/g, "*")); // AAA*BBB*CCC*DDD
console.log("AAA-aaa-CCC-DDD".replace(/A/g, "B")); // BBB*aaa*CCC*DDD
console.log("AAA-aaa-CCC-DDD".replace(/A/gi, "B")); // BBB*BBB*CCC*DDD

let empId = "2 731 59 54";
console.log(empId.split(" "));

let empId1 = "27315954";
console.log(empId.split(""));

const palindromeString = "MALAYALAM"; // ABCDE
const palindromeArray = palindromeString.split("");
palindromeArray.reverse();
console.log(palindromeArray.join("") === palindromeString);

console.log("ABCEDFER".substr(-4, 2));

let sampleArray = [11, 22, 33, 44, 55];
sampleArray.push(66);
console.log(sampleArray);
sampleArray.pop();
console.log(sampleArray);
console.log(sampleArray.slice(0, 2));
console.log(sampleArray);
sampleArray.shift();
console.log("Modified", sampleArray);

console.log(sampleArray.splice(0, 2));
console.log(sampleArray);
sampleArray = [11, 22, 33, 44, 55];
console.log(sampleArray.splice(1, 2, 0, 1));
console.log(sampleArray);
sampleArray = [11, 22, 33, 44, 55];
const toSplicedArr = sampleArray.toSpliced(1, 2, 0, 1);
console.log(sampleArray, toSplicedArr);
console.log(sampleArray.indexOf(44));
console.log(sampleArray.indexOf(444));
console.log(sampleArray.at());
console.log(sampleArray.at(444));
console.log(sampleArray.at(-1));
console.log(sampleArray.toString()); // '11, 22, 33, 44, 55'
const arr = [4, 5];
console.log(arr.join("")); // '45'
console.log(arr.join("-")); // '4-5'
sampleArray = [11, 22, 33, 44, 55];
sampleArray.copyWithin(2, 0);
console.log(sampleArray);
console.log("JOIN - ", sampleArray.join("")); // 1122334455
const sampleArray1 = [1, [2, [3, 4]], 7, 8];
console.log("JOIN - ", sampleArray1.join(""));
// 12,3,478
console.log("JOIN - ", sampleArray1.join("").replace(/,/g, ""));

function setStorage() {
  const enteredValue = document.getElementById("input5").value;
  const obj = [
    {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
  ];
  localStorage.setItem("message", JSON.stringify(obj));
}

function getStorage() {
  let readValueFromLocalStorage = localStorage.getItem("message");
  let obj = JSON.parse(readValueFromLocalStorage);
  console.log(obj);
}

function clearStorage() {
  localStorage.removeItem("message");
}

function onSort() {
  let array = [1, 6, 8, 4, 4545, 54, 4, 5];
  console.log("sort", array.sort());
  let sortedArray = array.sort();
  console.log(sortedArray[sortedArray.length - 2]);
}

indexOfInString();
function indexOfInString() {
  let content = "ABCDDEGG";
  console.log("Index - ", content.indexOf("A"));
  console.log("Index - ", content.indexOf("A", 5));

  let content1 = "testtest";
  const searchString = content1.search("est");
  console.log(searchString);

  const searchString1 = content1.search(/est/);
  console.log(searchString1);

  let content2 = "tEsttest";
  const searchString2 = content2.search(/est/i);
  console.log(searchString2);

  const searchString3 = content1.match("est");
  console.log(searchString3);

  const searchString4 = content1.match(/est/);
  console.log(searchString4);

  let content3 = "tEsttest";
  const searchString5 = content3.matchAll(/est/gi);
  console.log(searchString5);
  console.log("Iterator");
  searchString5.forEach((val) => {
    console.log(val);
  });

  const includesInString = "ABCTETET";
  console.log(includesInString.includes("TET"));

  console.log(includesInString.startsWith("AB"));

  console.log(includesInString.endsWith("Z"));

  const stringArray = ["Banana", "Mango", "Apple", "Orange"];
  console.log(stringArray.sort());

  // startWith
  // String.fromCharCode(65); // A
  // console.log(String.fromCharCode(90));
  // 65 to 90

  let modifiedArray = [];
  let counter = 0;
  for (let count = 65; count <= 90; count++) {
    for (let innerCount = 0; innerCount < stringArray.length; innerCount++) {
      counter = counter + 1;
      if (stringArray[innerCount].startsWith(String.fromCharCode(count))) {
        modifiedArray.push(stringArray[innerCount]);
      }
    }
  }
  console.log(counter, modifiedArray);
}

createLowerCaseAlphabets();
function createLowerCaseAlphabets() {
  let alphabets = "";
  let string1 = "TEST";
  let string2 = "Welcome";
  for (let count = 96; count <= 122; count++) {
    alphabets = `${alphabets}String.fromCharCode(count)`;
  }
  console.log(string2 + " " + string1);
  console.log(`${string2} ${string1}`);

  console.log("55" + "55");

  let x = 0.2 + 0.1;
  console.log(x);

  let xx = (0.2 * 10 + 0.1 * 10) / 10;
  console.log(xx);

  let xxx = 999999999999999;
  let newString = new String("test string");
  // let bigValue = new BigInt(9999999999999999);
  let no1 = new Number("123");
  let no2 = 123;
  let no3 = new Number("123");

  console.log(no1 == no2);
  console.log(no1 == no3);

  let no5 = 9.5;
  console.log(no5.toExponential(1));

  console.log(no5.toFixed());
  console.log(Math.ceil(no5));

  console.log(no1.valueOf()); //123
  console.log(no1 === no3); // false
  console.log(no1.valueOf() === no3.valueOf()); // TRUE

  console.log(Number("256abc45"));
  console.log(parseFloat("11.9"));
  let xyz = 1212;
  console.log(Number.isInteger(xyz));
}
const arrayOfNumbers = [222, 7, 9, 4, 3];

function findSumInArray() {
  let sum = 0;
  for (let count = 0; count < arrayOfNumbers.length; count++) {
    sum = sum + arrayOfNumbers[count];
  }
  return sum;
}

function multipleBy2() {
  let finalArray = [];
  for (let count = 0; count < arrayOfNumbers.length; count++) {
    finalArray.push(arrayOfNumbers[count] * 2);
  }
  return finalArray;
}

function multipleBy2UsingMap() {
  return arrayOfNumbers.map(multiplyByTwoFunction);
}

multiplyByTwoFunction = (value, index, array) => {
  return value * 2;
};

function findSumInArrayUsingReduce() {
  return arrayOfNumbers.reduce(addAllNumbers, 0);
}

addAllNumbers = (previousValue, currentValue, currentIndex, entireArray) => {
  return previousValue + currentValue;
};

function findMaxInArrayUsingReduce() {
  return arrayOfNumbers.reduce(findMax, arrayOfNumbers[0]);
}
// Normal function
// function findMax(pV, cV, cI, entireArray) {
//   return cV > pV ? cV : pV;
// }
// Function declaration
// findMax = function () {
//   return cV > pV ? cV : pV;
// };
//Arrow function
// findMax = () => {
//   return cV > pV ? cV : pV;
// };
// Simplified Arrow function
findMax = (pV, cV, cI, array) => (cV > pV ? cV : pV);

function findMinInArrayUsingReduce() {
  return arrayOfNumbers.reduce((pV, cV, cI, array) => {
    return pV < cV ? pV : cV;
  }, arrayOfNumbers[0]);
}

console.log("* 2 using for - ", multipleBy2());
console.log("* 2 using Map - ", multipleBy2UsingMap());
console.log("Sum using for", findSumInArray());
console.log("Sum using reduce", findSumInArrayUsingReduce());
console.log("MAx using reduce", findMaxInArrayUsingReduce());
console.log("MAx using reduce", findMinInArrayUsingReduce());

const noArray = [34, 43, 434, 56, 56, 1, 8, 8, 77, 90, 89];
function findEvenNumbers() {
  let newArray = [];
  for (let count = 0; count < noArray.length; count++) {
    if (noArray[count] % 2 === 0) {
      newArray.push(noArray[count]);
    }
  }
  return newArray;
}

function removeDuplicates() {
  let newArray = [];
  for (let count = 0; count < noArray.length; count++) {
    if (newArray.indexOf(noArray[count]) === -1) {
      newArray.push(noArray[count]);
    }
  }
  return newArray;
}

function findEvenNumbersUsingReduce() {
  return noArray.reduce(findEvenNos, []);
}

function findEvenNos(pV, cV, cI, array) {
  cV % 2 === 0 ? pV.push(cV) : pV;
  return pV;
}

function removeDuplicatesUsingReduce() {
  return noArray.reduce((pV, cV, cI, array) => {
    pV.indexOf(cV) === -1 ? pV.push(cV) : pV;
    return pV;
  }, []);
}

console.log(findEvenNumbers());
console.log(findEvenNumbersUsingReduce());

console.log(removeDuplicates());
console.log(removeDuplicatesUsingReduce());

const studentArray = [
  {
    fname: "Steve",
    lname: "Jobs",
    schoolName: "Oxford",
    location: "US",
    phone: "23233232324",
  },
  {
    fname: "Matt",
    lname: "Henry",
    schoolName: "MIT",
    location: "India",
    phone: "23233232324",
  },
  {
    fname: "Steve",
    lname: "Smith",
    schoolName: "Cambridge",
    location: "UK",
    phone: "23233232324",
  },
];

// '1212'.padStart(10, 'X')

const newStudentArray = studentArray.map((studentObj) => {
  return {
    name: `${studentObj.fname}, ${studentObj.lname}`,
    school: `${studentObj.schoolName}, ${studentObj.location}`,
    phone: 0,
  };
});
console.log(newStudentArray);

const studentArray1 = [
  {
    fname: "Steve",
    lname: "Jobs",
    schoolName: "Oxford",
    location: "US",
  },
  {
    fname: "Matt",
    lname: "Henry",
    schoolName: "MIT",
    location: "India",
  },
  {
    fname: "Steve",
    lname: "Smith",
    schoolName: "Cambridge",
    location: "UK",
  },
];

const newStudentArray1 = studentArray1.reduce((pV, cV, cI, array) => {
  pV.push({
    name: `${cV.fname}, ${cV.lname}`,
    school: `${cV.schoolName}, ${cV.location}`,
  });
  return pV;
}, []);

console.log(newStudentArray1);

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

let finalVal = arrays.reduce((pV, cV, cI, array) => {
  cV.forEach((val) => {
    pV.push(val);
  });
  return pV;
}, []);

console.log(finalVal);

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  // your code here
  let noOfYoungVotes = 0;
  let newArr = arr.reduce(
    (pV, cV, cI, arr) => {
      if (cV.age <= 30) {
        pV.numYoungPeople += 1;
        if (cV.voted) {
          pV.numYoungVotes += 1;
        }
      }

      if (cV.age > 30 && cV.age <= 60) {
        pV.numMidsPeople += 1;
        if (cV.voted) {
          pV.numMidVotesPeople += 1;
        }
      }
      if (cV.age > 60) {
        pV.numOldsPeople += 1;
        if (cV.voted) {
          pV.numOldVotesPeople += 1;
        }
      }
      return pV;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );

  console.log(newArr);
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4 
}
*/

const stringArray = ["A", "B", "C", "D", "E"];
// 'ABCDE'
// const stringArray1 = stringArray.map(changeName);
// function changeName(x) {
//   console.log(x);
//   return x.substr(0, 1);
// }

// const changeName = function (x) {
//   console.log(x);
//   return x.substr(0, 1);
// };

// const changeName = (x) => {
//   console.log(x);
//   return x.substr(0, 1);
// };

const stringArray1 = stringArray.map((x, index, array) => {
  console.log(x, index);
  return x.substring(0, 1);
});

console.log(stringArray1);

const stringArray2 = stringArray.reduce((pV, cV, index, array) => {
  pV = pV + cV;
  return pV;
}, "");

console.log(stringArray2);

function total(arr) {
  // your code here
  console.log(arr);
  return arr.reduce(add, 0);
}

function add(pV, cV, cI, array) {
  pV = pV + cV;
  console.log(pV);
  return pV;
}

console.log(total([1, 2, 3])); // 6

function totalVotes(arr) {
  // your code here
  return arr.reduce(noOfVotes, 0);
}

// function noOfVotes(pV, cV, cI, array) {
//   if (cV.voted === true) {
//     pV = pV + 1;
//   }
//   return pV;
// }

// const noOfVotes = function (pV, cV, cI, array) {
//   if (cV.voted === true) {
//     pV = pV + 1;
//   }
//   return pV;
// };

const noOfVotes = (pV, cV, cI, array) => {
  if (cV.voted === true) {
    pV = pV + 1;
  }
  return pV;
};

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7

setInterval(callBackFn, 5000);

// function callBackFn() {
//   console.log("called");
// }

// const callBackFn = function () {
//   console.log("called");
// };

// const callBackFn = () => {
//   return 5;
// };

const callBackFn = () => 5;
