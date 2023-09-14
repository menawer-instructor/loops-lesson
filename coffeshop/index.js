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
  const cookies = await takeInput("How Many Cookies?");
  const coffees = await takeInput("How many coffee you want?");
  console.log(`You ordered ${cookies} Cookies`);
  let cookiesCost = cookies * 0.25;
  let cofeecost = coffees * 1.25;
}

console.log(cookiesCost);
//This is Last line
runShop();
