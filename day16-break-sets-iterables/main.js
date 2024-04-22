/*
break - will exit the current loop
      - if break used inside another loop, it will exit the inner loop alone, 
        if break is used in inner loop
continue - will skip the current loop alone
return - will exit the entire method

Set - Collection of same type
    - Cannot have duplicates
    - new Set([1, 2, 3])
    - const set = new Set(); set.add(4);
    - delete - will remove from set
    - size - will give size of the set
    - we can use forEach, of to loop through the set
    - set.values() will give iterables. we can loop through iterables using for each or of
    - has - used to find a value in the set
    - forEach for an array will give value, index and entire array as the arguments for
      forEach.
    - forEach for an set will give value1, value2, entire array. Value2?


Map - key value pair
    - const map = new Map()	Creates a new Map
    - set()	Sets the value for a key in a Map => map.set('guava', 500)
    - get()	Gets the value for a key in a Map => map.get('guava')
    - delete()	Removes a Map element specified by the key
    - has()	Returns true if a key exists in a Map
    - forEach()	Calls a function for each key/value pair in a Map
    - entries()	Returns an iterator with the [key, value] pairs in a Map
    - size	Returns the number of elements in a Map

Object vs Map
    - Object is not iterable. Where map can be iterated.
    - Object is not having size property
    - Keys must be Strings (or Symbols) in object and	Keys can be any datatype in map

Set to Array and array to set
    - To change from set to Array => [...set] will give array 
      ex: set = new Set([11, 22]);  [...set] => [11, 22]
    - To change array to set
      new Set([1, 2, 3]) => {1, 2, 3}
    - filter is only for array and will not work for set

    - Spread operator => used to copy without reference. 
      ex- let a = [11, 33]; b = [...a]; b => [11, 33]


typeof  
    - string, number, boolean, undefined, bigint - Primitive data type
    - Array , Object, String, Number, Date, null -> typeof will return object
    - How to identify it is Array or string or etc.
      - using .constructor => {a: 45}.constructor will return
        function Object(){[native code]}
      - convert to String and check using indexOf, 
        we can identify if this is Array or Date or Object
      - {a: 50}.constructor === Array
      - new String('abc') => will return Object. Same for String, Boolean, Number
      - typeof null => object

instanceOf
    - Will give if the passed value is instance of [Array of Object or etc.]
    - const arr = [1, 2, 3]; arr instanceof Array => will give true
    - const arr = [1, 2, 3]; arr instanceof Object => will give true
    - const arr = "123"; arr instanceof Object => will give false

void 
    - mostly used a return type for functions
    - will not return anything if void is used for functions.

Type conversions
    - String to Number
      - Number('     ') => 0
      - Number('1232')  => 1232
      - Number('aa')    => NaN
      - Number('32 34') => NaN
      - parseInt or parseFloat will take the number value alone from the string, provided it starts with Number.
      - parseFloat will filter out decimals as well
    - Number to String conversions
      - String(121)
      - 121.toString()
    - Unary + Operator -> will convert valid number string to Number
        let y = "5";      // y is a string
        let x = + y;      // x is a number  

        */

function onContentLoaded() {
  var studentObject = [
    { name: "Ganapathy", class: 5 },
    { name: "Sundar", class: 7 },
    { name: "Mani", class: 3 },
    { name: "John", class: 1 },
    { name: "Peter", class: 1 },
    { name: "Martin", class: 4 },
    { name: "Joel", class: 6 },
    { name: "Shyam", class: 8 },
  ];

  const table = document.getElementById("studentTable");
  studentObject.forEach((rowDetails) => {
    const row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = rowDetails.name;
    row.insertCell(1).innerHTML = rowDetails.class;
    row.insertCell(2).innerHTML =
      "<button onClick='onEdit(this)'>Edit</button>";
    row.insertCell(3).innerHTML =
      "<button onClick='onDelete(this)'>Delete</button>";
  });
}

function addStudent() {
  const table = document.getElementById("studentTable");
  const input1 = document.getElementById("studentInput1");
  const input2 = document.getElementById("studentInput2");

  const row = table.insertRow(table.rows.length);
  row.insertCell(0).innerHTML = input1.value;
  row.insertCell(1).innerHTML = input2.value;
  row.insertCell(2).innerHTML = "<button onClick='onEdit(this)'>Edit</button>";
  row.insertCell(3).innerHTML =
    "<button onClick='onDelete(this)'>Delete</button>";
}

function onDelete(selectedObj) {
  console.log(selectedObj);
  const table = document.getElementById("studentTable");
  table.deleteRow(selectedObj.parentElement.parentElement.rowIndex);
}

var selectedRowIndex;
function onEdit(selectedObj) {
  console.log(selectedObj);
  selectedRowIndex = selectedObj.parentElement.parentElement.rowIndex;
  document.getElementById("studentInput3").value =
    selectedObj.parentElement.parentElement.childNodes[0].innerHTML;
  document.getElementById("studentInput4").value =
    selectedObj.parentElement.parentElement.childNodes[1].innerHTML;
}

function updateStudent() {
  const table = document.getElementById("studentTable");
  const enteredName = document.getElementById("studentInput3").value;
  const enteredClass = document.getElementById("studentInput4").value;
  table.children[0].children[selectedRowIndex].children[0].innerHTML =
    enteredName;
  table.children[0].children[selectedRowIndex].children[1].innerHTML =
    enteredClass;
}
usingBreak();
console.log("------------------");
usingBreakInsideAnotherLoop();
console.log("------------------");
usingReturnInsideAnotherLoop();
console.log("------------------");
usingContinue();

function usingBreak() {
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);
  }
}

function usingContinue() {
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
  }
}

function usingBreakInsideAnotherLoop() {
  let text = "";
  for (let outer = 0; outer < 10; outer++) {
    for (let inner = 0; inner < 10; inner++) {
      if (inner === 3) {
        break;
      }
      console.log("inner ", inner);
    }
    console.log("outer", outer);
  }
}

function usingReturnInsideAnotherLoop() {
  let text = "";
  for (let outer = 0; outer < 10; outer++) {
    for (let inner = 0; inner < 10; inner++) {
      if (inner === 3) {
        return;
      }
      console.log("inner ", inner);
    }
    console.log("outer", outer);
  }
}

creatingSet();

function creatingSet() {
  const numberSet = new Set(["1", "2", "3", "3"]);

  numberSet.add("4");
  numberSet.add("1");
  numberSet.delete("4");

  console.log(numberSet.has("9"));
  console.log(numberSet.has("3"));
  console.log("Set size", numberSet.size);
  console.log("For each");
  [1, 2, 4].forEach((val, index, array) => {
    console.log(val, index, array);
  });

  let placeSet = new Set();

  placeSet.add("America");
  placeSet.add("England");
  placeSet.add("Chicago");

  placeSet.forEach((val1, val2, set) => {
    console.log(val1, val2, set);
  });
  const setIterator = placeSet.keys();
  setIterator.forEach((val, index) => {
    console.log(val, index);
  });
  console.log("For of");
  for (x of numberSet) {
    console.log(x);
  }

  dateMethods();

  function dateMethods() {
    // const currentDate = new Date();
    console.log("---", String(Date()));
  }

  let text = "I love cats. Cats are very easy to love. Cats are very popular.";
  const iterator = text.matchAll(/Cats/gi);
  console.log(iterator);

  iterator.forEach((value) => {
    console.log(value, value.index);
  });

  console.log(numberSet.values());

  numberSet.values().forEach((value) => {
    console.log(value);
  });
}

const array = [1, 2, 3, 4, 5, 4];
console.log("Using array - ", array.length);

const setArray = new Set(array);
console.log("Using set - ", setArray.size);

const obj = {
  apple: 5000,
  banana: 300,
  orange: 200,
};
console.log(obj.apple);
console.log(obj["apple"]);

const map = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(map.get("apples"));
console.log(map.get("bananas"));

const map1 = new Map();
map1.set("total", 1000);
console.log(map1.get("total"));

console.log(map.size);
map.delete("apples");

console.log(map.size);
console.log(map.has("bananas"));

const entries = map.entries();
entries.forEach((values) => {
  console.log(values[0], values[1]);
});

class Student {
  name = "";
  location = "";
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getFullName() {
    return this.name + " " + this.location;
  }

  getCGPAScore() {}
}

let stu = new Student("Upskill", "Chennai");
let stu1 = new Student("Green Tech", "Coimbatore");
stu.getFullName(); // Upskill Chennai
stu1.getFullName(); // Green Tech Coimbatore

const array1 = [11, 22, 33, 55, 77];
const array2 = [11, 22, 44, 66, 88];
// [11, 22]
const intersection = [];
for (let outer = 0; outer < array1.length; outer++) {
  if (array2.indexOf(array1[outer]) !== -1) {
    intersection.push(array1[outer]);
  }
}
console.log(intersection);

const intersectionArray = array1.filter((value) => {
  return array2.indexOf(value) !== -1;
});
console.log(intersectionArray);

let set1 = new Set([1, 2, 3]); //[1, 2, 3]
let set2 = new Set([4, 3, 2]);
let set = new Set([...set1].filter((x) => set2.has(x)));
console.log(set);

let set4 = [...set1].filter((x) => set2.has(x));
console.log("set 4 ", set4);

let aa = [1, 2, 3];
let bb = aa;
bb.push(4);
console.log(bb, aa);

let a = [1, 2, 3];
let b = [...a];
b.push(4);
console.log(b, a);

console.log(set1);
console.log([...set1]);

const array11 = [11, 22];
const set11 = new Set(array11);
console.log(set11, array11);

// let set5 = new Set();
// add()
// { 43, 434, 54 }
// [...set5]

console.log("John".constructor.toString());
console.log((3.14).constructor.toString());
console.log(false.constructor.toString());
console.log([1, 2, 3].constructor.toString());
console.log({ name: "John", age: 34 }.constructor.toString());
console.log(new Date().constructor.toString());
console.log(function test() {}.constructor.toString());
// Returns function Function(){[native code]}
console.log(typeof null); // object

usingDateFunctions();
function usingDateFunctions() {
  const dt = new Date();
  console.log(dt.getDay());
  console.log(dt.getFullYear());
}

for (let outer = 0; outer < 5; outer++) {
  let x = "";

  for (let inner = outer; inner >= 0; inner--) {
    x = x + " * ";
  }
  for (let spaceCount = 5 - outer; spaceCount >= 0; spaceCount--) {
    x = " " + x;
  }
  console.log(x);
}

for (let outer = 4; outer >= 1; outer--) {
  let x = "";

  for (let inner = outer; inner >= 1; inner--) {
    x = x + " * ";
  }
  for (let spaceCount = 7 - outer; spaceCount > 0; spaceCount--) {
    x = " " + x;
  }
  console.log(x);
}
