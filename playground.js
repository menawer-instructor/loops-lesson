let arr = [1,2,3];
arr.push(5);
console.log(arr);
let newArr = arr.filter((x) => x==1);
console.log(arr);
console.log(newArr);