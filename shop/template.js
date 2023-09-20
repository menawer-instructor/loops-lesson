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
  while(true){
      const nameOfOrder = await takeInput(`Which drink do you want? write "done" when you finish?`);
      if(nameOfOrder == "done"){
        break;
      }
      let orderedItem = drinks.find((drink) => drink.name == nameOfOrder);
      orders.push(orderedItem);
  }
  console.log(orders);

}

runShop();
