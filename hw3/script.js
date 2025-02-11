//Task 1
function isEqual(a, b) {
  return a === b;
}

console.log("isEqual", isEqual(2, 2));
console.log("isEqual", isEqual(2, 3));
console.log("isEqual", isEqual(4, 2));
console.log("isEqual", isEqual(4, "2"));

function isEqualSecond(a, b) {
  return a === b ? true : false;
}

console.log("isEqualSecond", isEqualSecond(2, 2));
console.log("isEqualSecond", isEqualSecond(2, 3));
console.log("isEqualSecond", isEqualSecond(4, 2));
console.log("isEqualSecond", isEqualSecond(4, "2"));

const isEqualThird = (a, b) => (a === b ? true : false);

console.log("isEqualThird", isEqualThird(2, 2));
console.log("isEqualThird", isEqualThird(5, 2));
console.log("isEqualThird", isEqualThird(2, 11));
console.log("isEqualThird", isEqualThird(4, "2"));

//Task 2
function getSum(a, b) {
  if (!a || !b || typeof a !== "number" || typeof b !== "number") {
    console.log("Incorrect arguments");
    return;
  }
  return a + b;
}

console.log("getSum", getSum(1, 2));
console.log("getSum", getSum(5, 2));
console.log("getSum", getSum(12, 8));
console.log("getSum", getSum(1, "2"));
console.log("getSum", getSum());

const getSumArrow = (a, b) => a + b;

console.log("getSumArrow", getSumArrow(1, 2));
console.log("getSumArrow", getSumArrow(5, 22));
console.log("getSumArrow", getSumArrow(11, 25));

//Task 3
function getExponentiation(a, b = 2) {
  return a ** b;
}

console.log("getExponentiation", getExponentiation(5, 3));
console.log("getExponentiation", getExponentiation(7));
console.log("getExponentiation", getExponentiation(2, 4));
console.log("getExponentiation", getExponentiation(5));

const getExponentiationArrow = (a, b = 2) => a ** b;

console.log("getExponentiationArrow", getExponentiationArrow(5, 3));
console.log("getExponentiationArrow", getExponentiationArrow(7));
console.log("getExponentiationArrow", getExponentiationArrow(2, 4));
console.log("getExponentiationArrow", getExponentiationArrow(5));

//Task 4
function dayOfWeek(a) {
  if (typeof a !== "number") {
    return console.log("Oh no, it is not a number!");
  }
  switch (a) {
    case 1:
      return console.log("Monday");
    case 2:
      return console.log("Tuesday");
    case 3:
      return console.log("Wednesday");
    case 4:
      return console.log("Thursday");
    case 5:
      return console.log("Friday");
    case 6:
      return console.log("Saturday");
    case 7:
      return console.log("Sunday");
    default:
      return console.log("Incorrect day of the week!");
  }
}

dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);
dayOfWeek("9");

//Task 5
function userGreeting() {
  const userName = prompt("What is your name?");
  const userAge = prompt("How old are you?");

  if (!userName || !userAge) {
    return alert("We need your data!");
  }

  if (userAge > 30) {
    return alert(`Good afternoon, ${userName}`);
  } else {
    return alert(`Hello, ${userName}`);
  }
}

// userGreeting();

