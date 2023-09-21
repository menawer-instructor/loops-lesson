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

  let orders = [];
  let nameOfOrder = "";
  while (nameOfOrder.toLowerCase() != "done") {
    nameOfOrder = await takeInput("Which drink do you want?");
    let orderedItem = drinks.find(
      (drink) => drink.name.toLowerCase() == nameOfOrder.toLowerCase()
    );
    if (orderedItem) orders.push(orderedItem);
  }

  let sum = 0;
  orders.forEach((order) => {
    sum += order.cost;
  });

  console.log(orders);
  console.log(`your total is ${sum}`);

  //   let orders = [];
  //   while (true) {
  //     const nameOfOrder = await takeInput("Which drink do you want?");
  //     let orderedItem = drinks.find((drink) => drink.name == nameOfOrder);
  //     orders.push(orderedItem);
  //     const done = await takeInput("write done if you finish");
  //     if (done == "done") {
  //       break;
  //     }
  //   }
  //   console.log(orders);
}

runShop();
