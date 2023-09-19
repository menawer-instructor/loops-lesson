// ARRAY
() => {
  const x = [1, 2, 3, 5, 6];
  // 1- get into an element
  console.log(x[4]);

  // 2- we want to add element
  x.push(10);
  console.log(x);

  // 3- deleting the last element
  x.pop();
  console.log(x);
};
// LOOPS
() => {
  const y = [];
  for (counter = 1; counter <= 100; counter++) {
    y.push(counter);
  }

  console.log(y);
};
// Examples
() => {
  const array = ["ali", "nouf", "fatmah", "menawer", "mariam", "fahad"];

  for (counter = 0; counter < array.length; counter++) {
    array[counter] = array[counter].toUpperCase();
  }
  console.log(array[1]);
};
// functions & arrow function
() => {
  const hiSay = (name, amount) => {
    for (counter = 0; counter < amount; counter++) {
      console.log(`HELLO ${name} - ${counter}`);
    }
  };

  // hiSay("FATMAH", 1000);

  const sayHi = () => {
    console.log("HELLO ALI");
  };

  () => {};

  sayHi();

  function sum(num1, num2) {
    num1 + num2;
    //   return undefined;
    return num1 + num2;
  }

  const sum_ = () => {
    // start

    const obj = {
      name: "Ali",
      age: 99,
      grade: "A+",
    };

    return obj;
    //   return obj;
  };

  console.log(sum_().age);

  const array = [1, 2, 3, 4, 5, 10];

  console.log(array[array.length - 1]);

  const student = {
    name: "ALI",
    age: 80,
    grade: "A+",
  };

  console.log(student.grade, student.age);

  const getStudent = () => {
    return { name: "NOUF", age: 77, grade: "A++" };
  };

  // const dfsdfds = getStudent();
  console.log(getStudent().name);
};
// Iteration Methods
() => {
  const numbers = [1, 2, 3, 4, 5, 10, 11, 100];

  // for (counter = 0; counter < array.length; counter++) {
  //   console.log(array[counter]);
  // }

  // array.forEach((x) => {
  //   console.log(x);
  // });

  const res = numbers.forEach((number) => {
    console.log(number);
  });

  const res1 = numbers.filter((number) => {
    return number < 100;
  });

  const res2 = numbers.map((number) => {
    if (number == 100) {
      return number;
    }
  });

  console.log(res);
  console.log(res1);
  console.log(res2);
};

// OBJECTS
() => {
  const obj = {
    name: "ali",
    age: 50,
  };

  console.log(obj.name);
  obj.name = "A+";
  console.log(obj);

  delete obj.age;
  console.log(obj);
};

// Nested arrays & objects
const students = [
   {name:"ali1", age:77, grades:[50,70,30]},
   {name:"ali2", age:70, grades:[10,20,30]},
   {name:"ali3", age:79, grades:[110,170,130]},
   {name:"ali4", age:80, grades:[520,740,530]},
   {name:"ali5", age:80, grades:[20,40,30]},
]

const res = students.find((student, index)=>{


  return index == 0
})
console.log(res)

// console.log(res)
// const res2 = res.grades.map((grade)=>{
//   return 100
// })