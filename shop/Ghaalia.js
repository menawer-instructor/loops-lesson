// Code By Menawer, Takes input from user
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  async function takeInput(question) {
    return await new Promise((resolve) => {
      readline.question(question, resolve);
    });
  }
  // Dont look at above code yet.

  // 1. Hot drinks menue
  const hotDrinksMenu = [
    {
        id : 1,
        drink: "Black Tea",
        size: "Small",
        cost: 1.000
    },
    {
        id : 2,
        drink: "Americano",
        size: "Small",
        cost: 1.250
    },
    {
        id : 3,
        drink: "Matcha",
        size: "Small",
        cost: 1.500
    }
  ]

  // 2. Cold drinks menue
  const coldDrinksMenu = [
    {
        id : 1,
        drink: "Tea",
        size: "Small",
        cost: 1.000
    },
    {
        id : 2,
        drink: "Americano",
        size: "Small",
        cost: 1.250
    },
    {
        id : 3,
        drink: "Matcha",
        size: "Small",
        cost: 1.500
    }
  ]

  // 3. Somthing to eat
  const food = [
    {
        id: 1,
        product: "Coockie",
        cost: 0.750
    },
    {
        id: 2,
        product: "Dounat",
        cost: 1.250
    },
    {
        id: 3,
        product: "Chocolate",
        cost: 0.500
    },
  ]


  let totalPrice = 0
  let orderDrinks = []
  let orderFood = []
  async function runShop() {
    const theName = await takeInput("What is your name? ");
    console.log(`\n\tWelcome to the shop ${theName}!\n`);

    x = await takeInput(`What do you want to order?  
1. Hot drink
2. Cold drink
3. Food 
    Enter the number: `);
    

    while (x != 0)
    {
        if ( x == 1){
        console.log("\n\t\tHot Drinks")
        console.log("\nId".padEnd(8," ")+ "Drink".padEnd(15," ")+ "Small".padEnd(13," ")+ "Large")
        hotDrinksMenu.forEach( x =>
            {
                console.log(`${x.id.toString().padEnd(7," ")}${x.drink.padEnd(10," ")}     ${x.cost.toFixed(3)} KD     ${(x.cost*2).toFixed(3)} KD`)

            })

            ID = await takeInput("\nEnter th Id of the drink and 0 if you done: ");
            S = hotDrinksMenu.find(s => s.id==ID)
            orderDrinks.push(S)


          while(ID != 0){
            theSize = await takeInput("What size? ");

                if (theSize.toLowerCase() == S.size.toLowerCase())
                   totalPrice = totalPrice + S.cost
                else if (theSize.toLowerCase() == "large")
                    totalPrice = totalPrice + S.cost*2
                else console.log("We don't have this size")
            
            ID = await takeInput("Want another drink? or 0 to done:  ");
            }

    }
    else if (x == 2)
    {
        console.log("\n\t\tCold Drinks")
        console.log("\nId".padEnd(8," ")+ "Drink".padEnd(15," ")+ "Small".padEnd(13," ")+ "Large")
        coldDrinksMenu.forEach( x =>
            {
               
               console.log(`${x.id.toString().padEnd(7," ")}${x.drink.padEnd(10," ")}     ${x.cost.toFixed(3)} KD     ${(x.cost*2).toFixed(3)} KD`)
            })
         ID = await takeInput("\nEnter th Id of the drink and 0 if you done: ");
            S = coldDrinksMenu.find(s => s.id==ID)
            orderDrinks.push(S)


          while(ID != 0){
            theSize = await takeInput("What size? ");

                if (theSize.toLowerCase() == S.size.toLowerCase())
                   totalPrice = totalPrice + S.cost
                else if (theSize.toLowerCase() == "large")
                    totalPrice = totalPrice + S.cost*2
                else console.log("We don't have this size")
            
            ID = await takeInput("Want another drink? or 0 to done:  ");
            }


    } 
    else if (x == 3){
        console.log("\n\t\t Food")
        console.log("Id".padEnd(8," ")+ "Product".padEnd(15," ")+ "Cost")
        food.forEach( x =>
            {
                console.log(`${x.id.toString().padEnd(7," ")}${x.product.padEnd(10," ")}     ${x.cost.toFixed(3)} KD`)

            })

            ID = await takeInput("\nEnter th Id or 0 if you done: ");
            S = food.find(s => s.id==ID)
            orderFood.push(S)


          while(ID != 0){

            totalPrice = totalPrice + S.cost
            
            ID = await takeInput("Want anything else? or 0 to done:  ");
            }



    } 

    x = await takeInput(` 
1. Hot drink
2. Cold drink
3. Food 
    Want anything else? Enter 0 to done: `);
}
    
   


console.log(`\nYour Order is:`)


orderFood.forEach( x => {
    console.log(`${x.product.padEnd(10," ")}     ${x.cost.toFixed(3)} KD`)
})

orderDrinks.forEach( x => {
    console.log(`${x.size} ${x.drink.padEnd(10," ")}     ${x.cost.toFixed(3)} KD`)
})


   
    console.log(`Your total price:  ${totalPrice} KD`)
  }
  
  runShop();
  