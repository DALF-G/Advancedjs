// loops
// looping statements allows us to execute a block of code multiple times or repeatedly until a certain condition is met.
// There are three types of loops in javascript: for loop, while loop and do...while loop

// 1. for loop: it is used when the number of iterations is known
// structure : for (initialization; condition; increment/decrement){ code body for the "for" loop}

for (let i = 1; i <= 5; i++) {
    console.log("The values are: ", i)
}

// reverse the program to decrement

for (let i = 5; i >= 1; i--) {
    console.log("The values are: ", i)
}

// 2. while loop: 
// structure: initialization; while(condition){ code body for the "while" loop; increment/decrement}

console.log("===================")
let j = 1;
while (j <= 5) {
    console.log("The value of j is: ", j)
    j++
}

// by use of while loop, print out from 20 down to 10
console.log("===================")
let k = 20;
while (k >= 10) {
    console.log("The value of k is: ", k)
    k--
}

// 3. do...while loop: 
// this loop is quaranteed to run at least once even if the condition is false
// structure: initialize a variable with some values
// do{
// code to be executed
// }while(condition to be checked)

console.log("===================")
let p = 2;
do {
    console.log("The value of p is: ", p)
    p++
}while(p <= 10)

// loops are also used to iterate through an array 
console.log("===================")

let counties = ["Nairobi", "Mombasa", "Lamu", "Kajiado", "Bungoma", "Kisii", "Kiambu", "Kakamega"]

console.log("The list of counties is: ", counties)

for (let i = 0; i < counties.length; i++) {
    console.log(i)
}

//  Break and continue keywords in loops
// 1. continue: this keyword is used for the continuation of the the program when a certain condition is met

console.log("===================")
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        // console.log(i)
        console.log("Five is here")
        continue;
    }
    console.log(i)
}

// example 2: Break
// This is a keyword that is used to terminate or stop the execution of a program when a certain condition is met

console.log("===================")

for(i = 1; i <= 30; i++){
    console.log(i)
    if (i === 23) break;
}