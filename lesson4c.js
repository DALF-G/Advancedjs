// Async and Await functions
// These two key words are used when the function you have is expecting some other additional info/data from outside the function

const fetchData = async ()=>{
   try{
     // We shal send a request to the API(This api endpoin is definetly going to give a response)
    let response = await fetch ("https://api.chucknorris.io/jokes/random")

    // console.log(response)
    // convert the response into json format
    let convertedResponse = await response.json()
    
    // console.log(convertedResponse)

    // destructure to obtain the items that you need from the json response

    let{created_at, value} = convertedResponse

    // print the date when the joke was created
    console.log("Date created:",created_at)

    //  Print the joke itself
    console.log("The joke:",value)
   }
   catch(error){
    console.log("Error fetching the data:" +error)

   }
   
};
fetchData()