// task 1: Create a js program that is able to tell weather an year is a leap year or not, Factor in the years 1700 and 1900.
let year = 1700;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// find the leap years between 1689 and 1720. 
for (let yr = 1689; yr <= 1720; yr++) {
    if ((yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0)) {
        console.log(yr + " is a leap year.");
    } else {
        console.log(yr + " is not a leap year.");
    }
}

// Task 2: by use of for loop, print out all the numbers between 200 and 100. if a number is divisible by 5 print out " multiple of five" instead of the number.

for (let i = 200; i >= 100; i--) {
    if (i % 5 === 0) {
        console.log("multiple of five");
    } else {
        console.log(i);
    }
}

// read on js Functions and arrow functions
// A function is a block of code that is designed to perform a particular task. It is executed when "something" invokes it (calls it).
// A function is defined with the function keyword, followed by a name, followed by parentheses ().
// Function parameters are listed inside the parentheses () in the function definition.
// The code to be executed, by the function, is placed inside curly brackets {}.
// e.g

function greet(name) {
    console.log("Hello " + name);
}
greet("Diana");
greet("John");