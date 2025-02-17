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

//Solution: Carefully review the syntax of all required modules to ensure that there are no syntax errors. 
//Tools like linters can help to catch these errors.