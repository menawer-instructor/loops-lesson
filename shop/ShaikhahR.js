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
        name: "Mocha",
        cost: 2.50,
        category: "Cold",
      },
      {
        name: "white Mocha",
        cost: 2.40,
        category: "Hot",
      },
      {
        name: "Tea",
        cost: 1.40,
        category: "Hot",
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
      if(nameOfOrder.trim().toLowerCase() == "done"){
        break;
      }//if
      
      

      let orderedItem = drinks.find((drink) => drink.name.trim().toLowerCase() == nameOfOrder.trim().toLowerCase());
      const quantity = await takeInput(`how many?`);
      orderedItem.quantity = quantity;
      
      orders.push(orderedItem);

    }//while

    console.log(orders);

    const total = orders.reduce((total,order) => total + (order.cost * order.quantity) ,0);
    console.log(`Your total is ${total} kd`);
    console.log("Thank you!")

    const newLowerDrinks= drinks.map((x) => x.name.toLowerCase());

    console.log(newLowerDrinks);


    
  }//runShop
  
  runShop();
  