//Code By Menawer, Takes input from user
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//This Takes
async function takeInput(question) {
  return await new Promise((resolve) => {
    readline.question(question, resolve);
  });
}
//Dont look at above code yet.

//This Runs the shop
async function videogamescd() {
  let videogamescd = await takeInput("How Many videogamescd?");
  console.log(`you order ${videogamescd} games!`);
}
async function runShop() {
  const cookies = await takeInput("How Many Cookies?");
  const coffees = await takeInput("How many coffee you want?");
  console.log(`You ordered ${cookies} Cookies`);
  console.log(`You ordered ${coffees} Coffees`);
  let cookiesCost = cookies * 0.25;
  let cofeecost = coffees * 1.25;
  let totalcost = cookiesCost + cofeecost;
  console.log(`You should pay ${totalcost}`);

  const name = await takeInput("whats your name?");
  console.log(name);

  const coupon = await takeInput("enter coupon number");
  if (coupon == "Coded 2023") {
    //Fatma
  }
}

//This is Last line
runShop();

// latte cost
// Tahani Function
// async function Lattecost(cup){
// let cost=cup*1.5;
//   const cups=await takeInput("How many cups do u want")

// return cost ,cups;
// }
