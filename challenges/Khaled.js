// Copy this file to your own name file,
// Then solve it
const users = [
  {
    id: 1,
    name: "Salwa",
    role: "Moderator",
  },
  {
    id: 2,
    name: "Salem",
    role: "Customer",
  },
  {
    id: 3,
    name: "Faisal Hamad",
    role: "Admin",
  },
  {
    id: 4,
    name: "Sami Samer",
    role: "Admin",
  },
];
// Implement the following function to find the object by taking the id
// and returns it
// Example: findById(3)
// Returns: {
//     id:3,
//     name:"Faisal Hamad",
//     role:"Admin"
// }
function findById(id) {
  // Code here
  return users.find((eachUser) => eachUser.id == id);
}
console.log(findById(3));

// Implement the following function to find the object by taking the id
// and returns it
// Example: findByRole("Admin")
// Returns: [
// {
//      id:3,
//      name:"Faisal Hamad",
//      role:"Admin"
//  },
//  {
//      id:4,
//      name:"Sami Samer",
//      role:"Admin"
//  }]
function filterByRole(role) {
  // Code here
  return users.filter((eachUser) => eachUser.role == role);
}
console.log(filterByRole("Admin"));

// Write a function to return the number of users
// Example: numberOfUsers()
// Returns: 4
function numberOfUsers() {
  // Code here
  return users.length;
}
console.log(numberOfUsers());

// Write a function to return the number of users by Role
// Example: numberOfUsersByRole("Admin")
// Returns: 2
function numberOfUsersByRole(role) {
  // Code here
  return users.filter((eachUser) => eachUser.role == role).length;
}
console.log(numberOfUsersByRole("Admin"));

// Write a function to return the name of all users in a new array
// Example: nameOfUsers()
// Returns: ["Salwa","Salem",...etc]
function nameOfUsers() {
  // Code here
  return users.map((eachUser) => eachUser.name);
}
console.log(nameOfUsers());
