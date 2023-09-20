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
    name: "Iced matcha",
    cost: 2.5,
    category: "Cold",
  },
  {
    name: "Pumpkin spice latte",
    cost: 2.5,
    category: "Hot",
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
  //   const nameOfOrder = await takeInput("Which drink do you want?");
  //   let orderedItem = drinks.find((drink) => drink.name == nameOfOrder);
  //   console.log(orderedItem);

  //   let orders = [];
  //   const nameOfOrder = await takeInput("Which drink do you want?");
  //   while (nameOfOrder != "done") {
  //     const nameOfOrder = await takeInput("Which drink do you want?");
  //     let orderedItem = drinks.find((drink) => drink.name == nameOfOrder);
  //     orders.push(orders);
  //   }
  //   console.log(orders);

  let orders = [];
  while (true) {
    const nameOfOrder = await takeInput("Which drink do you want?");
    let orderedItem = drinks.find((drink) => drink.name == nameOfOrder);
    orders.push(orderedItem);
    const done = await takeInput("write done if you finish");
    if (done == "done") {
      break;
    }
  }
  console.log(orders);
}

runShop();
