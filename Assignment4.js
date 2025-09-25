//   Assignment use async to
// https://official-joke-api.appspot.com/random_joke
// Extract and print out the contents of the setup and the punchline
const fetchData = async() =>{
    let response = await fetch("https://official-joke-api.appspot.com/random_joke")
    let convertedResponse = await response.json()

    let {setup, punchline} = convertedResponse

    console.log("The content of the setup is:",setup)
    console.log("The value is:",punchline)
    
}
fetchData()

 

// Assignment :create a register function 
// it will have username,email,password and phone
function register(username, email, password, phone) {
// check if the email is valid by checking the at symbol and dot
if (!email.includes("@") || !email.includes(".")) {
    return "Invalid email address!";
  }
// check password if is strong and finally resgister successfully
 let strongPassword =
    password.length >= 8 &&
    /[A-Z]/.test(password) && // at least one uppercase
    /[a-z]/.test(password) && // at least one lowercase
    /[0-9]/.test(password) && // at least one digit
    /[\W_]/.test(password);   // at least one special character

  if (!strongPassword) {
    return "Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character!";
  }
// Check if all fields are provided
if (!username || !email || !password || !phone) {
    return "All fields are required!";
  }
 // If all checks pass
  return `User ${username} registered successfully!`;
}  
console.log(register("Andrie", "dalfandrie@gmail.com", "0Seven!15", "0715082817")); // typed all fields
console.log(register("Andrie", "dalfandrie.com","0Seven!15", "0715082817")) // ommited @gmail
console.log(register("Andrie", "dalfandrie@gmail","0Seven!15", "0715082817")) // ommited .com
console.log(register("Andrie", "dalfandrie@gmail.com","0Seven15", "0715082817")) // ommited special character in pass
