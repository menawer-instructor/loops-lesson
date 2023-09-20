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
    name: "Tea",
    cost: 1,
    category: "Hot",
  },
  {
    name: "Water",
    cost: 0.5,
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
  while (true) {
    const nameOfOrder = await takeInput(
      "Which drink do you want?, type done when finish: "
    );
    let orderedItem = drinks.find(
      (drink) => drink.name.toLowerCase() == nameOfOrder.toLowerCase()
    );
    if (nameOfOrder == "done") {
      break;
    }
    const quantityOfOrder = await takeInput("Enter quantity: ");
    orderedItem.quantity = quantityOfOrder;
    orders.push(orderedItem);
  }
  let total = 0;
  orders.forEach((x) => {
    total += x.cost * x.quantity;
  });
  orders.forEach((x) => {
    console.log(`
    Name: ${x.name} // Item Price: ${x.cost} KD/pc  // Quanity: ${
      x.quantity
    } pcss // Total Item Price: ${x.cost * x.quantity} KD `);
  });
  console.log(`               TOTAL = ${total} KD`);
  // for (i = 0; i < orders.length; i++) {
  //   console.log(`Item: ${orders.name[i]} -- Quantity: ${orders.quantity[i]}`);
  // }
}

runShop();
