let nested = [
  ["Chocolate", "Ice Cream"],
  ["Burger", "Chicken"],
  ["Cola", "Lemon & Mint"],
  [
    ["test", "boss!"],
    ["another", "test"],
  ],
];
// console.log(nested[3][0][1]);

const names = ["Ali", "Nouf", "Mariam"];
for (counter = 0; counter < names.length; counter++) {
  //   console.log(names[counter]);
}
names.sort();
// console.log(names);

function sum(arr) {
  // arr=[3,4,5,10]
  let total = 0;
  for (counter = 0; counter < arr.length; counter++) {
    total += arr[counter];
    // counter: 0 , total: 0, arr[0]: 3
    // counter: 1 , total: 3, arr[1]: 4
    // counter: 2 , total: 7, arr[2]: 5
    // counter: 3 , total: 12, arr[3]: 10
  }
}

// sum([3, 4, 5, 10]);
