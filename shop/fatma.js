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
  
  async function runShop() {
    const cookies = await takeInput("How Many Cookies? ");
  }
  
  runShop();
  