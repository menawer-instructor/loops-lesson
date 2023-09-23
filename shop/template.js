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
    name: "Cappuccino",
    cost: 2.0,
    category: "Hot",
  },
  {
    name: "Macchiato",
    cost: 2.75,
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
  const orders = [];
  while (true) {
    const nameOfOrder = await takeInput(
      `Which drink do you want? write "done" when you finish?`
    );
    if (nameOfOrder.toLowerCase() == "done") {
      break;
    }
    const quantity = await takeInput(`How many?`);
    let orderedItem = drinks.find(
      (drink) => drink.name.toLowerCase() == nameOfOrder.toLowerCase()
    );

    orderedItem.quantity = quantity;
    orders.push(orderedItem);
  }

  let total = 0;
  orders.forEach((order) => {
    total += order.cost * order.quantity;
  });
  console.log(`Please pay: ${total} KD`);
}

runShop();
