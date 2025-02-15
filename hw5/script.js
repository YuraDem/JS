// Task 1
console.log("Task 1");

const userValidName = (userData) => {
  let validName = userData[0].toUpperCase() + userData.slice(1).toLowerCase();
  return validName;
};

const userFullName = () => {
  let userName;
  let userSurname;
  let isValid = false;
  do {
    userName = prompt("Enter your name: ");
    userSurname = prompt("Enter your surname: ");

    if (userName === null || userSurname === null) {
      return;
    }

    if (!userName || !userSurname) {
      alert("Enter data please!");
      continue;
    }

    userName = userValidName(userName);
    userSurname = userValidName(userSurname);
    isValid = true;
  } while (!isValid);
  return `${userName} ${userSurname}`;
};

const registerUser = () => {
  const userValidFullName = userFullName();
  let userPassword;
  let isAuth = false;

  do {
    userPassword = prompt("Enter your password: ");
    if (userPassword === null) return;

    if (!userPassword || userPassword.length < 6) {
      alert("Minimum length of password is a 6 symbols!");
      continue;
    }

    if (
      !isNaN(userPassword) ||
      userPassword.toUpperCase() === userPassword ||
      userPassword.toLowerCase() === userPassword
    ) {
      alert(`example of valid password "a12FdeE"`);
      continue;
    }

    isAuth = true;
  } while (!isAuth);

  return alert(`Hello, ${userValidFullName}, your password: ${userPassword}`);
};

// const res = registerUser();

// Task 2
console.log("Task 2");

const random = (min, max) => {
    let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(randomNumber);
}

console.log(random(5, 7));