const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage');
        // res.end();
    }
    else if(req.url==='/about'){
        res.end('Welcome to our about page');
        // res.end();
    }
    else{
    // res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the pages you're looking for!</p >
    <a href="/">Back to home page</a>
    `);
}
})

server.listen(5000);