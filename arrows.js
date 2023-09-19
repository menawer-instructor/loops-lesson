// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => `Hello, ${name}`;

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sumTwoNumbers = (a, b) => a + b;

// Q3) Write a simple arrow function that squares a number.
const squareNumber = (num) => num * num;

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const squareArray = (arr) => {
  let newArray = [];
  for (counter = 0; counter < arr.length; counter++) {
    newArray.push(arr[counter] ** 2);
    // counter: 0, arr[0]: 1, arr[0]**2: 1, newArray: [1]
    // counter: 1, arr[1]: 2, arr[1]**2: 4, newArray: [1,4]
    // counter: 2, arr[2]: 3. arr[2]**2: 9, newArray: [1,4,9]
    // counter: 3, arr[2]: 4. arr[2]**2: 16, newArray: [1,4,9,16]
  }
  return newArray;
};
squareArray([1, 2, 3, 4]);

// let ages = [22, 34, 20, 10];

// const getBirthYears = (arr) => arr.map((el) => 2023 - el);

// const blah = (fn, arr) => console.log(fn(arr));

// blah(getBirthYears, ages);
