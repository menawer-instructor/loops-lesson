
let myArray = [];

myArray.push("apple", "banana", "cherry");
console.log(myArray[0]);
console.log(myArray);

console.log(myArray[0]);

console.log(myArray[myArray.length-1]);

myArray.unshift("mango");
console.log(myArray);

myArray.pop();
console.log(myArray);


const numbers = [5, 10, 15, 20, 25];
console.log(numbers);
numbers.splice(1,2);
console.log(numbers.length);
 
const temperatures = [72, 68, 74, 80, 76];
const max = Math.max(...temperatures);
console.log(max);


function included(myArray){
    if(myArray.includes("banana"))
    return true;
else return false;
}

console.log(included(myArray));




    
  


 


    /**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/

function isArrayLengthOdd(numbers) {
    
    let l = ((numbers.length)%2)


    if (l == 0)
    return true;
    else return false;
};

console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));







  /**
    
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */

function isArrayLengthOdd(numbers) {
    
    let l = ((numbers.length)%2)


    if (l == 0)
    return false;
    else return true;
};

console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));







 /**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */

let instructors = ["Mishary", "Hasan"];
function addLailaToArray(instructors){
instructors.push("Laila")
};
addLailaToArray(instructors);

console.log(instructors);








 /**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */

    let TeamArray = ["Brazil", "Germany", "Italy"];
    function eliminateTeam(teams){
    return teams.pop()
    };

   
    console.log (eliminateTeam(TeamArray));








      /**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */

    /*

    let FruitsArray = []

    let chunk1 = FruitsArray.slice(0, FruitsArray.length / 2)
    let chunk2 = FruitsArray.slice(FruitsArray.length / 2, FruitsArray.length);

*/

let fruits = [];

    function secondHalfOfArrayIfItIsEven(fruits){

        let l = ((fruits.length)%2)

    if(l == 0){
        return fruits.slice(fruits.length / 2, fruits.length);
    }else{
        return [];
    };
    
    };

        console.log (secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
        console.log (secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));
        
        




    
  
    
    /**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */


    function youGottaCalmDown(shout) {

       return shout.slice(0, shout.indexOf(`!`));
    };

    console.log (youGottaCalmDown(`Hello!!!!!`));
    
/* 

other solutions 

let shout = `Hello!!!!!`;
let subShout = shout.slice(0, 6);

let shout = `Hello!!!!!`;
let subShout = shout.slice(0, shout.indexOf(`!`));

console.log({subShout}); */






        



