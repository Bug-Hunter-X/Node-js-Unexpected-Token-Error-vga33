const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon bug: Unexpected token error when using the require statement. 
// This can happen if there is a syntax error in the required module. 
// For example, if there is a missing parenthesis or bracket, or an unexpected token.