# JSD-Project2
 JSD-GA Project 2

// Using Fetch
// fetch works differently than $.getJSON, for example,
// where you can pass in a callback and log the data received from there.
// Instead, fetch returns what is called a Promise 
// which represents the result of an asynchronous operation.

// Instead of passing a callback, 
// you call .then() on it which is how you handle the result of a Promise. 
// We also need to specify what type of data we are expecting (in this case, JSON) 
// before we can access the data and use it.

// fetch takes in the endpoint and specifies that we are expecting a JSON response from Wikipedia. 
// The first .then() expression returns another Promise so we have to call a second .then() on that 
// to handle the JSON data and log it to the console.

// The function in the catch block only executes if the fetch requests or the then blocks throw an error.
