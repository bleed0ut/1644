const http = require('http');
const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content/Type', 'text/html');
    res.end(`<p><ol><li>One</li><li>Two</li><li>Three</li></ol></p>`);
});
server.listen(port, hostname, ()=>{
    console.log(`server is working at http://${hostname}:${port}`);
})