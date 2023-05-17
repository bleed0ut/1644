const http = require('http');
const port = 3000;
const hostname = ('localhost');

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch(req.url){
        case "/home":
            res.writeHead(200);
            res.end(`<h1>This is Home page</h1>`);
            break;
        case "/about":
            res.writeHead(200);
            res.end("<h1>This is About page</h1>");
            break;
        default:
            res.end("<h1>Hello World</h1><p>This is a HTML response</p");
            break;
    }
});
server.listen(port, hostname, ()=>{
    console.log(`Server is working at http://${hostname}:${port}`);
})