// control flow structures
// if, if...else, if...elif...else and the loops

// 1. if statement : it is used to check the truthfulness of a statement

let age = 10;
if (age >= 6) {
  console.log("You are of good age.");
}

// 2. if...else statement: it is used to check the condition and if the condition is met, it executes the if block but if the condition is not met, it executes the else block

let miaka = 2;

if (miaka >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.")}

// create a js program that checks whether a person is eligible to donate blood based on the age and weight.The age needs to be more than 16yrs and weight more than 49kgs.

let age1 = 20;
let weight = 50;

if (age1 >= 16 && weight > 49) {
    console.log("You are eligible to donate blood.");
} else {
    console.log("You are not eligible to donate blood.")

}

// if...elif...else statement: it is used in comparing multiple conditions/eqations

let grade = 82;

if (grade > 100) {
    console.log("Invalid entry.Please try again")
} else if (grade >= 90 && grade <= 100) {
    console.log("You have gotten an A.")
} else if (grade >= 80 && grade < 90) {
    console.log("You have gotten a B.")
} else if (grade >= 60 && grade < 80) {
    console.log("You have gotten a C.")
} else {
    console.log("Grade C- and below.")
}