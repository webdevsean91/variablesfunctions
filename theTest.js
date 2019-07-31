const http = require('http');
const fileHandler = require('fs');
//Get module needed for string manipulation
const theString = require('./stringManip.js');
//Below is a random string with capitals so we can see it being manipulated
const something = " THis IS A bunch Of WoRdS  o_O"

let thestring = theString.stringFiddle(something);

fileHandler.writeFile('newstring.txt', thestring, (err) => {
    if (err) throw err;

});

http.createServer(function(request, response) {
    response.write('The string has been placed in newstring.txt');
    response.end();
}).listen(3000, () => {//The listen() method is used to specify which port you want to listen for HTTP requests on. 
    console.log(`Server is listening on port 3000. Open http://localhost:3000`);
});