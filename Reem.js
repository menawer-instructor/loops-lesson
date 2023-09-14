
let MyArray = [];
MyArray.push("Apple","Banana","Cherry")
console.log(MyArray[0]);
console.log(MyArray[2]);
MyArray.unshift("Mango");
console.log(MyArray)
MyArray.pop();
console.log(MyArray)

const numbers = [5, 10, 15, 20, 25];
numbers.splice(2,1);
console.log(numbers);

function findlenght(arr){
    return arr.length
}
let test = findlenght(numbers);
console.log(test);


const temperatures = [72, 68, 74, 80, 76];
const max = Math.max(...temperatures);
console.log(max);

function exist(MyArray){
    if (MyArray.includes("Banana"))
    return true;
    else return false;
} 

console.log(exist(MyArray));


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

if (l == 1)
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
    function isArrayLengthEven(numbers) {
        let l = ((numbers.length)%2)

     if (l == 0)
     return true;
     else return false;
    };

    console.log(isArrayLengthEven([1, 2, 3]));
    console.log(isArrayLengthEven([1, 2, 3, 4]));

    
    /**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */

    let instructors = ["Mshary", "Hasan"]
    instructors.push("Laila")
    console.log(instructors);

    

    /**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */

    let teams = ["Brazil", "Germany", "Italy"]
    function eliminateTeam(teams) { 
        teams.pop();
        return teams;
    }
    
    console.log(eliminateTeam(teams))
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
    function secondHalfOfArrayIfItIsEven(fruits) {
    // Your code here
    }
    
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
    // Your code here
    }



//Question 1: Write a for loop in JavaScript that prints the numbers from 1 to 10.


//Question 2: Write a for loop in JavaScript that prints the even numbers from 2 to 20.

//Question 3: Write a while loop in JavaScript that calculates the sum of all integers from 1 to 100.

//Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and calculates their sum.