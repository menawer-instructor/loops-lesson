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
    name: "Hot Chocolate",
    cost: "1.500 kd",
    category: "Coco powder on top",
  },
  {
    name: "Green Tea",
    cost: 0.75,
    category: "Single tea bag",
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
  const nameOfOrder = await takeInput("Which drink do you want?");
  let orderedItem = drinks.find((drink) => drink.name == nameOfOrder);
  console.log(orderedItem);
}

runShop();
