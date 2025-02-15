// Task 1
console.log("Task 1.1");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Task 1.2");
for (let i = 20; i >= 10; i--) {
  console.log(i);
}

console.log("Task 1.3");
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

console.log("Task 1.4");
let j = 20;
do {
  console.log(j);
  j--;
} while (j >= 10);

console.log("Task 1.5");
let k = 1;
while (k <= 10) {
  console.log(k);
  k++;
}

console.log("Task 1.6");
let l = 20;
while (l >= 10) {
  console.log(l);
  l--;
}

// Task 2
console.log("Task 2");

function naturalNumbers(start, finish) {
  Mark: for (let i = start; i <= finish; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue Mark;
    }
    console.log(i);
  }
}

naturalNumbers(1, 10);

// Task 3
console.log("Task 3");

const LOGIN = "admin";
const PASSWORD = "1q2w3e";

const isUserAuth = () => {
  let userLogin;
  let userPassword;

  for (let i = 3; i >= 0;) {
    if (i == 0) {
      alert(`Oh no, you have ${i} attempts! Please reload page!`);
      break;
    } else {
      alert(`You have ${i} attempts for authorize!`);
    }

    userLogin = prompt("Enter your login: ");
    if (userLogin === null) break;

    if (!userLogin) {
      alert("Your data is empty!");
      continue;
    }

    userPassword = prompt("Enter your password: ");
    if (userPassword === null) break;

    if (!userPassword) {
      alert("Your data is empty!");
      --i;
      continue;
    }

    if (userLogin !== LOGIN || userPassword !== PASSWORD) {
      alert("Incorrect data try again!");
      --i;
      continue;
    } else {
      alert("Welcome!");
      return;
    }
  }
};

isUserAuth();
