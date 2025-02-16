const countTrue = (arr) => {
  let sumOfTrue = 0;

  for (let elem of arr) {
    if (elem > 0) {
      sumOfTrue += elem;
    } else {
      continue;
    }
  }

  return sumOfTrue;
};

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([true, true, true, true, true]));
console.log(countTrue([]));

const getOccurrencesCount = (arr) => {
  let fruitsTotal = {};

  for (let elem of arr) {
    if (!fruitsTotal[elem]) {
      fruitsTotal[elem] = 1;
    } else {
      fruitsTotal[elem] += 1;
    }
  }

  return fruitsTotal;
};

console.log(
  getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ])
);

const findExcess = (arr) => {
  if (arr.length < 3) {
    return console.log("Need more numbers!");
  }
  let oddNumbers = [];
  let evenNumbers = [];

  for (let number of arr) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }

  const result =
    oddNumbers.length > evenNumbers.length ? evenNumbers[0] : oddNumbers[0];
  return result;
};

console.log(findExcess([1]));
console.log(findExcess([0, 1, 2]));
console.log(findExcess([1, 2, 3]));
console.log(findExcess([2, 6, 8, 10, 3]));
console.log(findExcess([0, 0, 3, 0, 0]));
console.log(findExcess([1, 1, 0, 1, 1]));
