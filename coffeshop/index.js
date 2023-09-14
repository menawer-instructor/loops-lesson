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
  console.log(`You ordered ${cookies} Cookies`);
  let cookiesCost = cookies*0.250;
}

console.log(cookiesCost);
//This is Last line
runShop();
