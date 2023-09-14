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
async function runShop() {
  let cookies = await takeInput("How Many Cookies?");
  console.log(`you order ${cookies} cookies!`);
}
async function videogamescd() {
  let videogamescd = await takeInput("How Many videogamescd?");
  console.log(`you order ${videogamescd} games!`);
}

//This is Last line
runShop();
