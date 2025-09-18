// array data type
//  An array is a collection of related items which are of same data type
// These items ara contained inside of indexes 

let Fruits = ['Banana',"Apple","Orange","Grapes","Mango"];
console.log("The Array of fruits is: ", Fruits);
console.log(typeof Fruits)

// Accessing the elements of an array by using index
console.log(Fruits[1]) 

// Array slicing: we use the slice method to display a part of the array
console.log(Fruits.slice(1,3)) // it will display the elements from index 1 to index 3 but not including index 3

// we use push method to add an item at the end of the array
Fruits.push("Berries")
console.log("The updated array of fruits is: ", Fruits)
Fruits.push("Pineapple")
console.log(Fruits)

// We use pop method to remove an item from the end of the array
Fruits.pop()
console.log(Fruits)

// we have the length function to show the  number of items in the array
console.log("The number of items in the array of fruits is: ", Fruits.length)
