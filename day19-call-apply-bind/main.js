var studentObj = {
  firstName: "Ganapathy",
  lastName: "D",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const getStudentId = function () {
  return this.firstName + " " + this.lastName + Math.round(Math.random() * 100);
};

const printStudentLocation = function (...arg) {
  return (
    this.firstName +
    this.lastName +
    " from " +
    arg[0].city +
    ", " +
    arg[0].state
  );
};

const printStudentState = function (...arg) {
  return this.firstName + this.lastName + " from " + arg[0].state;
};

// Accessing method in object
console.log(studentObj.getFullName());
// Using call
const id = getStudentId.call(studentObj);
console.log(id);
// Using bind
const location1 = printStudentLocation.bind(studentObj, {
  city: "Chennai",
  state: "TN",
});
console.log(location1());
// Using apply
const state = printStudentState.apply(studentObj, [
  {
    city: "Chennai",
    state: "TN",
  },
]);
console.log(state);

// Throttling

const loggerFunc = () => {
  console.count("Throttled Function");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize", betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function
const normalFunc = () => {
  console.count("Normal Function");
};

// window.addEventListener("resize", normalFunc);
