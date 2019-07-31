const http = require('http');
http.createServer(function(request, response) {
response.write('I can use Node :)');
response.end();
}).listen(3000);