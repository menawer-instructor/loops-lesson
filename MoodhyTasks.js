
let myArray = [];

myArray.push("apple", "banana", "cherry");
console.log(myArray[0]);
console.log(myArray);

console.log(myArray[0]);

console.log(myArray[2]);

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




