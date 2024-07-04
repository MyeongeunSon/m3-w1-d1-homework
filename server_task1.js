var http = require('http');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer(function(req, res){
    console.log(`Request for ${req.url} by method ${req.method}`);
   
    // check status code 200 
    // url Home page, About, Contact, Invalid Request

    if (req.url === "/") {
    res.statusCode = 200;
    res.end(`Home Page.`);
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end(`About Page.`);
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end(`Contact Page.`);
  } else {
    res.statusCode = 200;
    res.end("Invalid Request!");
  }
});

// Port 5000, Display The NodeJS server msg

server.listen(port,hostname, () => {
    console.log("The NodeJS server on port 5000 is now running on http://localhost:5000");
  });