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


async function coffee()
{
  const ans = await takeInput("How many coffee you want?")
  console.log(`You ordered ${ans} coffee`)
}

coffee();