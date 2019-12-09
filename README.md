# JSD-Project2
### JavaScript-GA Project 2
 By Omar A. Al-Khunein

#

Using Fetch instead pf getJSON

in getJSON you pass in a callback the data received from there.
while fetch returns a Promise 
that represents the result of an async operation.

Instead of passing a callback, you call .then() on it which is how you handle the result of a Promise. 
and specifying the data type too e.x. (json) before we can access the data and use it.

## in this project:
fetch takes in the endpoint and specifies that we are expecting a JSON response from Wikipedia. 
The first .then() expression returns another Promise so we have to call a second .then() on that 
to handle the JSON data and log it to the console.

### incase of error
The function in the catch block will executes if the fetch requests or the .then() throw an error.
