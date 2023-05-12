const http = require('http');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'test/plain');
    res.end('Hello madafaka');
});

server.listen(port, hostname, () =>{
    console.log(`server is working at https://${hostname}: ${port}`);
});
