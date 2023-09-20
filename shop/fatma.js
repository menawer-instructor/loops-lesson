//Code By Menawer, Takes input from user
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function takeInput(question) {
  return await new Promise((resolve) => {
    readline.question(question, resolve);
  });
}
//Dont look at above code yet.
const drinks = [
  {
    name: "Latte",
    cost: 2.25,
    category: "Hot",
  },
  {
    name: "Iced Americano",
    cost: 1.75,
    category: "Cold",
  },
  {
    name: "spanish latte",
    cost: 2.75,
    category: "hot",
  },
  {
    name: "hot americonp",
    cost: 2.75,
    category: "hot",
  },
];

async function runShop() {
  console.log("Welcome to our Shop, siiiiiiiiir!");
  drinks.forEach((drink) =>
    console.log(`
    Name: ${drink.name}
    Cost: ${drink.cost}
    Category: ${drink.category}
    `)
  );

  let orders = [];
  while (true) {
    const nameOfOrder = await takeInput("Which drink do you want?");
    if (nameOfOrder == "done") break;
    let orderedItem = drinks.find((drink) => drink.name == nameOfOrder);
    orders.push(orderedItem);
  }

  console.log(orders);
}

runShop();

const students = [
  { name: "ali", age: 50, grades: [100, 200, 300, 400] },
  { name: "ali1", age: 50, grades: [10, 20, 30, 40] },
  { name: "ali2", age: 50, grades: [11, 32, 24, 44] },
  { name: "ali3", age: 50, grades: [100, 200, 3020, 400] },
  { name: "ali4", age: 50, grades: [100, 200, 300234, 442300] },
  { name: "ali5", age: 50, grades: [100, 200, 300, 400423] },
];

const res2 = students.some((student) => {
  const res = student.grades.some((grade) => {
    if (grade == 442300) {
      return true;
    } else {
      return false;
    }
  });

  if (res) {
    return true;
  } else {
    return false;
  }
});

console.log(res2);
