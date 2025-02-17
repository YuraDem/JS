const numbers = [1, 2, -10, -2, 7];

const numbersToBoolean = (arr) => arr.map((number) => number > 0);

console.log(numbersToBoolean(numbers));

const users = [
  {
    name: "Sam",
    role: "admin",
    age: 25,
  },
  {
    name: "Peter",
    role: "admin",
    age: 16,
  },
  {
    name: "Pablo",
    role: "admin",
    age: 32,
  },
  {
    name: "Enrico",
    role: "client",
    age: 43,
  },
  {
    name: "Mary",
    role: "client",
    age: 34,
  },
  {
    name: "Katerine",
    role: "guest",
    age: 17,
  },
];

const findAdultAdmin = (arr) => {
  const admins = arr
    .filter((user) => user.role === "admin" && user.age >= 18)
    .map((user) => user.name);

  return admins;
};

const adultAdmins = findAdultAdmin(users);
console.log(adultAdmins);

const average = (arr) => {
  return arr.reduce((acc, value) => {
    acc = acc + value / arr.length;
    return acc;
  }, 0);
};

const res1 = average([1, 10, 17, 24, 45]);
console.log(res1);

const increment = (number) => number + 1;

const ownMap = (arr, cb) => {
  const mapArray = [];

  for (let number of arr) {
    mapArray.push(increment(number));
  }

  return mapArray;
};

const ownMapRes = ownMap([1, 2, 3], increment);
console.log(ownMapRes);

const isNegative = (number) => number < 0;

const ownFilter = (arr, cb) => {
  const filterArray = [];

  for (let number of arr) {
    if (cb(number)) {
      filterArray.push(number);
    }

    continue;
  }

  return filterArray;
};

const ownFilterRes = ownFilter([-2, 4, -1], isNegative);
console.log(ownFilterRes);

const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownForEach = (arr, cb) => {
  for (let item of arr) {
    cb(item, arr.indexOf(item), arr);
  }
};

const ownForEachRes = ownForEach([1, 2, 3], logger);

const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];

const filterData = (arr, obj) => {
  return arr.filter((user) => {
    return Object.keys(obj).every((item) => {
      return user[item] === obj[item];
    });
  });
};

const filterDataRes = filterData(data, { position: "middle" });
console.log(filterDataRes);

function Test(name, surname) {
  this.name = name;
  this.surname = surname;
  const greeting = `Hello ${this.name} ${this.surname}`;
  console.log(greeting);
}

const person1 = new Test("Yura", "Demianchuk");
console.log(person1);
