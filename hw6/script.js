// Task 1
console.log("Task 1");

const getSchedule = () => {
  const schedule = {};
  let isOver = false;

  while (!isOver) {
    const time = prompt("Enter your time in this format `10:10`: ");
    const task = prompt("Enter your task: ");

    if (time === null) {
      isOver = true;
      break;
    }

    if (!time || !task) {
      alert("Enter time and tasks!");
      continue;
    }

    schedule[time] = task;
  }
  return schedule;
};

// const scheduleResult = getSchedule();
// console.log("scheduleResult", scheduleResult);

const salaries = {
  John: "4300.00",
  Ann: "5700.40",
  Pete: "4900.95",
};

const getSalariesSum = (obj) => {
  let salariesSum = 0;

  for (let key in obj) {
    let employeeSalary = Number(obj[key]);
    salariesSum += employeeSalary;
  }

  return salariesSum.toFixed(2);
};

const res1 = getSalariesSum(salaries);
console.log("res1", res1);
