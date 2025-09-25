// Arrow functions
// They were introduced in the current version of JS i.e ecma version 6 and a new way to declare/initialize a function
//They help us to come up with simplified structure of a function
// e.g

const greeting = () => {
    console.log("Hello there, Hope you are fine?")
}
greeting() 

// Create an arrow function that is able to add two numbers
const add = () => {
    sum = 45 + 20
    console.log(`The sum is ${sum}`)
}
add()

// Arrow function with parameters
const salamu = (name) => {
    console.log(`Jambo ${name}, u hali gani?`)
}
salamu("Joy")
salamu("Bahati")

// Below is an arrow function that calculates the product of three numbers passed as arguments
const product = (x, y, z) => {
    let answer = x * y * z
    console.log(`The product of the three numbers is ${answer}`) 
}
product(12, 30, 10)
product(5, 7, 6)

// Create a function that is able to find the simple interest of three different individuals with different rates, principals and time
const simpleInterest = (principal, rate, time) => {
    let interest = (principal * rate * time) / 100
    
    console.log(`The simple interest is ${interest}`)
}
simpleInterest(25000, 8.5, 7)
simpleInterest(30000, 7.5, 5)
simpleInterest(60000, 5.8, 6)

// Anonymous function in javascript
// This is a function that does not have a defined name, It automatically picks the name of the variable where it is stored

const greet = function(){
    console.log("Hello there.How are you?")
}
greet();

// Below is another example of an anonymous function

(
    function(){
        console.log("This is another anonymous function")
    }
)()