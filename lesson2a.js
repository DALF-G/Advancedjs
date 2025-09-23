//  The filter method/function is used to show the output based on some rules/conditions

let cities = ['London', 'New York', 'Eldoret', 'Nairobi', 'Cairo', 'Jerusalem', 'Beirut', 'Moscow']

console.log(cities)

let updatedCities = cities.filter(item => item !== 'Cairo')

// The above shall create a new array with the exemption of cairo city

console.log("The updated cities array is: ", updatedCities)

// We can use the filter function to create a program that is able to find all the even numbers in array

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNumbers = numbers.filter(n => n % 2 === 0)

console.log("The even numbers from the array are: ", evenNumbers)

console.log("The odd numbers from the array are: ", numbers.filter(n => n % 2 !== 0))

// Map method/function is used to loop through an array as you perform some actions 

let sum = 0;

let answer = numbers.map(n => sum = sum + n)
console.log("The sum of the items of the Array is: ", sum)