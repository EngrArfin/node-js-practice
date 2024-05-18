const http = require('http');

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (req, res) => {
  console.log(req);
  req.end('Hello From Word')
});

server.listen(5000,()=>{
    console.log(`server is listening on port in 5000`);
});