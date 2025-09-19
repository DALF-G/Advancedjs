// Object DataType
// An object is a data type that organises data in terms of key - value pairs
// Objects are used to store multiple values in a single variable

let Student = {
    // properties of  the student

    name: "John Doe",
    age: 19,
    grade: "A",
    isEnrolled: true,
    courses: ["Math", "English", "Science"],

}
console.log(Student)
console.log(typeof Student)

// To access the items of on array we use the key (1st option - dot notation)

console.log("The name of the student is: ", Student.name)
console.log("is enrolled? ", Student.isEnrolled)

// 2nd option - square brackets and then the key

console.log("The student got grade: ", Student["grade"])
console.log("What is the age of the student? ", Student["age"])

// Create an object called car with five properties.show how to access two of its properties.

let car = {
    colour: "blue",
    model: "Toyota",
    year: 2020,
    isNew: true,
    mileage: 15000,
}

console.log("The car model is:", car.model)
console.log("the colour of the car is:",car["colour"])
console.log("Is the car new:",car["isNew"])
console.log("The car mileage is:",car.mileage)

// Object Destructuring
// It is the process of matching/extracting of the values of an object as you put them onto variables

let user = {
    username: "johndoe",
    email: "johndoe@example.com"
}
// below is how we destructure the two keys i.e username and email
let { username, email } = user

// if print out the two variables, it shall contain the destuctured details of the object
console.log("The username of the user is: ", username)
console.log("The email address of the user is: ", email)

// Example 2
let country = {
    name: "Kenya",
    population: 55000000,
    continent: "Africa",
    language: "kiswahili",
}
//  we can destructure the properties as shown below
let { name, population, continent, language } = country

console.log("The name of the country is: ", name)
console.log("what language do they speak? ", language)