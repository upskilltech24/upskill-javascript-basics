/*
typeof -gove
 */

var mapInJS = new Map();
mapInJS.set(1, "test");
mapInJS.set(2, 12);
mapInJS.set(3, undefined);
mapInJS.set(4, true);
mapInJS.set(5, [1, 2, 3, 4]);
mapInJS.set(6, { a: 5, b: 7 });
mapInJS.set(7, null);
mapInJS.set(8, new Date());

function getType() {
  const enteredInput = document.getElementById("input1").value;
  const enteredInputToNumber = Number(enteredInput);
  if (enteredInput === "") {
    alert("Enter valid input");
  } else if (isNaN(enteredInputToNumber)) {
    alert("Enter enter valid number between 1 to 8");
  } else if (enteredInputToNumber < 1 || enteredInputToNumber > 8) {
    alert("Enter enter number between 1 to 8");
  } else if (mapInJS.get(enteredInputToNumber) === null) {
    alert("Selected type is null");
  } else {
    const type = typeof mapInJS.get(enteredInputToNumber);
    if (type !== "object") {
      alert(type);
    } else {
      const accessConstructor = mapInJS.get(enteredInputToNumber).constructor;
      if (accessConstructor === Array) alert("Selected type is Array");
      if (accessConstructor === Object) alert("Selected type is Object");
      if (accessConstructor === Date) alert("Selected type is Date");
    }
  }
}
