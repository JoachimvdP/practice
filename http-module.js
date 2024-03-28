const http = require('http'); 

const server = http.createServer((req, res) => {
    if(req.url === '/') {
       res.end('Hey bro'); 
    }
    if(req.url === '/about') {
        res.end('About me');
    }

    res.end('404 - page not found');
})

server.listen(3000, 'localhost');