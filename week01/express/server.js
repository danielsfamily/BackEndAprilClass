const http = require ('http');
const fs = requirew ('fs')


// const server = http.createServer((req, res) => {
//    res.writeHead(200,{'Content-Type' : 'text/plain'})
//    res.end("Hello World");
// })

// server.listen(3000, () => {
//   console.log( 'Server running at http://localhost:3000')
// })

const server = http.createServer((req, res) => {
  console.log("REQ,req")
  if (req.url === '/') {
    fs.writeFile('data.txt', 'Sample data', 'utf8', (err) => {
      if (err) throw err;
      console.log('File has been written successfully.');
    });
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the root route!');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

