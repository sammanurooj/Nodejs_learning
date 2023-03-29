const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/hello') { // if the requested URL is "/hello"
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, world!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found'); // if the requested URL is not "/hello"
    }
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});


var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);



// implementaion of path 


const path = require('path');

// Get the base name of a file
const fileName = path.basename('/Files/data/hello.txt');
console.log(fileName);

// Join multiple path segments together
const fullPath = path.join('/Files', 'data', 'myfolder', 'hello.txt');
console.log(fullPath);

// Normalize a path (e.g. remove redundant slashes and dots)
const normalizedPath = path.normalize('/Files/data/../myfolder/./hello.txt');
console.log(normalizedPath);


// implementation of fs module

const fs = require('fs');




fs.writeFile('./Files/data/hello.txt', 'Hello, world!.this is  a text file', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.readFile('./Files/data/hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


// Check if a file or directory exists
fs.existsSync('./Files/data/hello.txt');



// implementation of OS module

const os = require('os');

// Get the hostname of the computer
const hostname = os.hostname();
console.log(hostname); // Output: the hostname of the computer

// Get the number of CPU cores
const numCores = os.cpus().length;
console.log(numCores); // Output: the number of CPU cores

// Get the total amount of memory (in bytes)
const totalMemory = os.totalmem();
console.log(totalMemory); // Output: the total amount of memory