// javascript functions
// A function is a block of code/statement that performs a specific task when called/invoked eg. summation, finding the product of two numbers etc

// two main types of functions
// 1. Functions without parameters

function greet() {
    console.log("Hello there. Hope you are fine?")
}
greet() // invoking/calling the function

// 2. Functions with parameters
// parameters are additional values that get passed as arguments when invoking/calling a function
function salamu(name) {
    console.log(`Hello ${name}, How have you been?`)
}
salamu("Diana")
salamu("John")

// Below is a function tha calculates the sum of two numbers
function sum(x, y) {
    let total = x + y
    console.log(`The total is: ${total}`)
}

sum(45, 50)
sum(30, 40)
sum(80, -15)

// create a function that finds the product 0f 3 given numbers

function product(a, b, c) {
    let total = a * b * c
    console.log(`The product is: ${total}`)
}
product(6, 10, 20)
product(2, 4, 8)

// Desctructuring in functions
// This is whereby you put parrameters of a function into variables

function studentInfo({name, subject, cat1, cat2}) {
    let total = cat1 + cat2;
    console.log(`${name} scored ${total} marks in ${subject}`)
}

studentInfo({
    name: "Joakim",
    subject: "programming",
    cat1: 45,
    cat2: 30
})

// come up with a desstructured function that contains productName, quantity, price and VAT of an item.print gthem out when invoked.

function itemInfo({productName, quantity, price, VAT}) {
    let total = price * quantity;
    let totalWithVAT = total * ( VAT);

    console.log(`Product: ${productName}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Price: Ksh ${price}`);
    console.log(`Total with VAT: Ksh ${totalWithVAT}`);
}

itemInfo({
    productName: "Laptop",
    quantity: 2,
    price: 1000,
    VAT: 1.16
});