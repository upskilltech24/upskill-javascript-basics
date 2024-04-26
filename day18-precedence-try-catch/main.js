/*
Multiplication (*) and division (/) have higher precedence 
    than addition (+) and subtraction (-).

Operations with the same precedence (like * and /) are computed from left to right:
100 * 50 / 3 will automatically converts to (100 * 50) / 3;
100 * 50 / 4 * 3 will change to ((100 * 50) / 4) * 3

try, catch - code written under try will execute and if any  error occurred
 in the try block will not stop the JS execution and focus will move to the catch block to 
 handle error scenarios.

 finally - Finally will execute irrespective of error or failure.

 try catch added outside the timeout block will not work properly for timer events. 
 In order to solve it, we need to add try catch  inside the setTimeout callback method
 
 throw will send a custom message to the catch block

 throw 'Error is caught' => will return as string
 throw new Error ('Error is caught') => will return error object.
we have to read the error message as error.message

*/

console.log(5 * 4 + 50); // Will  print 70

console.log(5 * (4 + 50)); // Will  print 270

let x = (100 / 50) * 3;
console.log(x); // Will  print 9

let xx = (100 * 50) / 3;
console.log(xx); // Will  print 1666.6666666666667

let xxx = ((100 * 50) / 4) * 3; // 3750
console.log(xxx); // Will  print 1666.6666666666667

let y = 1 + (2 ** 3 * 4) / 5;
console.log(y); // 7.5

let i = 10;
let z = i++;
console.log(z);
let zz = ++i;
console.log(zz);
console.log(true === 8 < 16);

function testFunction() {
  console.log("testFunction called");
  return 5;
}

function onLoad() {
  try {
    if (testFunction() === 5) {
      console.log("5");
    }
    // document.getElementById("errorMessage").innerHTML = "test test";
  } catch (err) {
    document.getElementById("errorMessage").innerHTML = err.message;
  } finally {
    console.log("Finally called");
  }
  try {
    document
      .getElementById("callbackBtn")
      .addEventListener("click", onBtnClick);
  } catch (err) {
    console.log("err");
  }
}

function onBtnClick() {
  try {
    consolee.log("1111");
  } catch (err) {
    console.log("error");
  }
}

function usingThrowOption() {
  const message = document.getElementById("errorMessage");
  message.innerHTML = "";
  let x = document.getElementById("userInput").value;
  try {
    x = x.trim();
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
    throw "Valid";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}

function onRegister() {
  const username = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  try {
    if (username === "" && password === "") {
      document.getElementById("registerErrorMessages").innerHTML =
        "Username and password is null";
    } else if (username === "" && password !== "") {
      document.getElementById("registerErrorMessages").innerHTML =
        "Username is null";
    } else if (username !== "" && password === "") {
      document.getElementById("registerErrorMessages").innerHTML =
        "Password is null";
    } else if (username !== "" && password !== "") {
      alert("Login successful");
    }
  } catch (err) {
    document.getElementById("registerErrorMessages").innerHTML = err;
  }
}

function tryCatchInSetTimeout() {
  // try {
  //   setTimeout(function () {
  //   consoles.log("Error");
  // }, 3000);
  // } catch (e) {
  //   console.log("won't work");
  // }

  setTimeout(function () {
    try {
      consoles.log("Error");
    } catch {
      console.log("error is caught");
    }
  }, 3000);
}
tryCatchInSetTimeout();

function retryError() {
  const number = 5;
  try {
    // user-defined throw statement
    throw new Error("This is the throw");
  } catch (error) {
    console.log("An error caught");
    if (number + 8 > 10) {
      // statements to handle exceptions
      console.log("Error message: " + error);
      console.log("Error resolved");
    } else {
      // cannot handle the exception
      // rethrow the exception
      throw new Error("The value is low");
    }
  }
}

retryError();
