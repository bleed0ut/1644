const http = require('http');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"message" : " Hello madafaka "}`);
});

server.listen(port, hostname, () =>{
    console.log(`server is working at http://${hostname}:${port}`);
});
