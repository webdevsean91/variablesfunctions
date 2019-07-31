
const http = require('http');
const fileHandler = require('fs');

const thePrimes = require('./prime.js');

const theEvens = require('./even.js');


let dadate = thePrimes.myDateTime() + "\n\n";
let total = "List of prime numbers:  " + thePrimes.thePrimes() + "\n\n"; 
let eventNumbers = "List of Even Numbers:  " + theEvens.evenNums() + "\n\n"; 

fileHandler.writeFile('nums.txt', total, (err) => {
    if (err) throw err;

});


fileHandler.appendFile('nums.txt', eventNumbers, (err) => {
    if (err) throw err;

});

fileHandler.appendFile('nums.txt', dadate, (err) => {
    if (err) throw err;

});
/* The createServer() method takes a callback function as an argument. This function, that will get executed when a request is made, is known as a requestListener. 
The requestListener takes two objects as arguments: 
The request object that contains properties and methods related to the HTTP request that has been made.
The response object that contains properties and methods related to the HTTP response that will be sent back to the browser.
*/
http.createServer(function(request, response) {
    response.write('The file has been created');
    response.end();
}).listen(8000, () => {//The listen() method is used to specify which port you want to listen for HTTP requests on. 
    console.log(`Server is listening on port 8000. Open http://localhost:8000`);
});