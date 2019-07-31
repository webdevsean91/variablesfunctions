const http = require('http');
const fileHandler = require('fs');

fileHandler.unlink('nums.txt', (err) => {
    if (err) throw err;

});
//We confirm file is deleted
http.createServer(function(request, response) {
    response.write('The file has been deleted');
    response.end();
}).listen(8000, () => {//The listen() method is used to specify which port you want to listen for HTTP requests on. 
    console.log('Server is listening on port 8000. Open http://localhost:8000 ... File should be deleted');
});