// Question 1: 
// create a js program that calculates the simple interest given the principle as 25000, rate as 8.5% and time as 7 years

    //   interest = (principal * rate * time) / 100

let principal = 25000;
let rate = 8.5;
let time = 7;
let simpleInterest = (principal * rate * time) / 100;
console.log("The simple interest is: " + simpleInterest);




// Question 2:
// Create a js program that finds the BMI of a person given the weight AS 69KGS and height as 1.73 meters

      // BMI = weight / (height * height)
let weight = 69;
let height = 1.73;
let bmi = weight / (height * height);
console.log("The BMI is: " + bmi);

// Question 3:
// Create an array of 10 random counties in kenya. Show the use of push, pop, slice and length functions.

let counties = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Malindi", "Kajiado", "Machakos", "Nyeri"];

console.log("10 random counties in kenya are: " + counties);

// push
counties.push("Meru");
console.log("Updated random counties in kenya are: " + counties);

// pop
counties.pop();
console.log("Random counties in kenya  after pop: " + counties);

// slice
let slicedCounties = counties.slice(2, 5);
console.log("Random counties in kenya after slicing are: " + slicedCounties);

// length
console.log("Number of random counties in kenya is: " + counties.length);

