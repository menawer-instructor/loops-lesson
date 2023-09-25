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
    name: "Espresso",
    cost: 1.1,
    category: "hot",
  },
  {
    name: "Ice Tea",
    cost: 2.5,
    category: "Cold",
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
  let total = 0;

  while (true) {
    const nameOfOrder = await takeInput("Which drink do you want?");
    if (nameOfOrder == "done") {
      break;
    }
    const quantity = await takeInput("how many?");

    let orderedItem = drinks.find(
      (drink) => drink.name.toLowerCase() == nameOfOrder.toLowerCase()
    );
    orderedItem["quantity"] = quantity;
    if (orderedItem) {
      orders.push(orderedItem);
    }
  }
  orders.forEach((order) => {
    console.log(`${order.name}     ${order.cost}     ${order.quantity}`);
    total += order.cost * order.quantity;
  });
  //   console.log(orders);
  console.log(`Please pay:${total}kd`);
}

runShop();
