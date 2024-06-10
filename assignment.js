//1...
// function cubeNumber(number) {
//   return number * number * number;
// }

// const num = 4;
// console.log(cubeNumber(num));

//

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "pleae enter a number";
  }
  return number * number * number;
}

const num = "oggy";
console.log(cubeNumber(num));

//
//problem number 2.
// function matchFinder(string1, string2) {
//   if (string1.toLowerCase().endsWith(string2.toLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const stringName = "javaScript";
// const stringName2 = "script";
// console.log(matchFinder(stringName, stringName2));
//
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide a validate string inputs";
  } else {
    if (string1.toLocaleLowerCase().endsWith(string2.toLocaleLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
}

// const stringName = "javaScript";
// const stringName2 = "script";
// console.log(matchFinder(stringName, stringName2));
//
//

//
// problem number 3.
function sortMaker(arr) {
  if (arr[0] > 0 && arr[1] > 0) {
    if (arr[0] === arr[1]) {
      return "equals";
    } else {
      return arr.sort((a, b) => b - a);
    }
  }
  return "Invalid Input";
}

// const array = [2, 4];
// console.log(sortMaker(array));
//
//problem number 4
//
// function findAddress(obj) {
//   const address = Object.values(obj).join(",");
//   return address;
// }

// const object = {
//   street: 10,
//   house: "15A",
//   society: "Eart Perfect",
// };
// console.log(findAddress(object));
//
//

function findAddress(obj) {
  const valuesOneLine = Object.values(obj)
    .map((value) => (value === undefined || value === undefined ? "--" : value))
    .join(",");
  return valuesOneLine;
}
const object = {
  street: 10,
  house: undefined,
  society: undefined,
};
// console.log(findAddress(object));
//
//
// problem Number 5.
//
function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "The array of notes is empty.";
  }

  let totalAmount = 0;
  for (let i = 0; i < changeArray.length; i++) {
    totalAmount += changeArray[i];
  }

  return totalAmount >= totalDue ? "true" : "false";
}

const array = [2, 1, 5];
const taka = 10;
console.log(canPay(array, taka));
