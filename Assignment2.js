// task 1
// Create an object called "product" with properties id, name, cost, quantity, and description.Use destructuring to extract and log the properties..

let product ={
  id : 1,
  name : "bike",
  cost : 25000, 
  quantity : 50,
  description : "brand new",
}

let {id, name, cost, quantity, description} = product

console.log("The product id is",id)
console.log("The product name is,",name)
console.log("The cost of the product is",cost)
console.log("The product quantity is",quantity)
console.log("The product description is",description)

// task 2
let rawName = "   diana karanja  ";
let rawEmail = "DianaKaranja@Email.com   ";
let course = "Introduction to coding";
let age1 = 17;

// Assignment:
// Welcome, Diana Karanja!
console.log("Welcome,", rawName.trim().charAt(0).toUpperCase() + rawName.trim().slice(1));

// Email: dianakaranja@email.com
console.log("Email:", rawEmail.trim().toLowerCase())

// Course: INTRODUCTION TO CODING
console.log("Course:", course.toUpperCase())

// Your email address has 25 characters.
console.log("Your email address has", rawEmail.trim().length, "characters.");

// First name: Diana
console.log("First name:", rawName.trim().charAt(0).toUpperCase() + rawName.trim().slice(1, rawName.trim().indexOf(" ")));

// Updated course: Introduction to JavaScript
console.log("Updated course:", course.replace("coding", "JavaScript"));

// Initials: D.K.
console.log("Initials:", rawName.trim().charAt(0).toUpperCase() + "." + rawName.trim().charAt(rawName.trim().indexOf(" ") + 1).toUpperCase() + ".");