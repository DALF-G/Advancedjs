let name = "   Alice wanjiku"
let age = 35;

console.log("The name of the person is: ", name)

// we use the trim() function to remove the trailing spaces
let updatedName = name.trim()
console.log("The name of the person is: ", updatedName)

let greetings = `Hello, ${name.trim()}! you are ${age} years old.`
console.log("Hello", name, "you are", age, "years old.")
console.log(greetings) 

//  We use the toUpperCase() function to tarnsform the text to capital letters
let convertedGreetings = greetings.toUpperCase()
console.log(convertedGreetings)

// alternatively we use the toLowerCase() function to transform the text to small letters
let smallCaseGreetings = greetings.toLowerCase()
console.log(smallCaseGreetings)

// the slice() function enables us to extract characters from a given index to another index

console.log(name.trim().slice(2,4)) 
// includes function : -it is used to check  wether a given character exists in a given string.it returns a boolean value
console.log(name.trim().includes("f"))

//  the index of function returns the position of the first occurrence of a letter in a string

console.log(name.trim().indexOf("w"))
console.log(name.indexOf("w"))
console.log(name.trim().length)
console.log(name.length)

//  replace function: - it is used to replace the  first occurrence of a substring 

let replacedName = name.replace("Alice", "jessica")
console.log(replacedName)

//  charAt(index) - This function nomally finds/outputs the character at a given index
console.log("The letter at index 4 is: ", name.trim().charAt(4))

// split function - it separates the string into an array 
console.log(name.trim().split(" "))

//  endswith function - it checks if a string ends with a certain value.it returns a boolean value
console.log(name.trim().endsWith("wanjiku"))

// startswith function - it checks if a string starts with a certain value.it returns a boolean value
console.log(name.trim().startsWith("Alice"))


// repeat function - it repeats a string a given number of times
console.log(name.trim().repeat(3))
console.log(name.repeat(3))