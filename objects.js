/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

let person = {
  name: "Omar",
  age: 18,
  city: "Kuwait",
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

person.email = "test@gmail.com";

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const p1 = { name: "John", age: 25 };
function hasKey(obj, key) {
  if (obj[key]) return true;
  else return false;
}
hasKey(p1, "city");

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
function printTitle(x) {
  console.log(x.title);
}
function printTitles(movies) {
  movies.forEach(printTitle);
}

// printTitles(movies)
/******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
function filterYear1994(x) {
  return x.year == 1994;
}
let filtered = movies.filter(filterYear1994).length;
// console.log(filtered)
/******************************
      Q7) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/

function updateName(arr) {
  const newArray = arr.map((x) => {
    if (x.title == "The Dark Knight") {
      x.genre = "Action/Drama";
    }
    return x;
  });
  return newArray;
}
updateName(movies);
