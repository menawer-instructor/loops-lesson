
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
console.log(numbers.length);

const temperatures = [72, 68, 74, 80, 76];
const max = Math.max(...temperatures);
console.log(max);

function exist(MyArray){
    if (MyArray.includes("Banana"))
    return true;
    else return false;
} 

console.log(exist(MyArray));
