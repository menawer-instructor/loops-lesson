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
  const answer = await takeInput("How Many Cookies?");
}

//This is Last line
runShop();


// latte cost
async function Lattecost(cup){
let cost=cup*1.5;
  const cups=await takeInput("How many cups do u want")

return cost ,cups;
}
