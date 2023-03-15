// const http = require('http');
// const fs = require('fs');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   // Only allow GET requests
//   if (req.method !== 'GET') {
//     res.statusCode = 405;
//     res.setHeader('Allow', 'GET');
//     res.end('Method not allowed');
//     return;
//   }

//   // Handle routes
//   if (req.url === '/raw-html') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Welcome</h1>');
//   } else if (req.url === '/users') {
//     fs.readFile('users.json', (err, data) => {
//       if (err) {
//         console.error(err);
//         res.statusCode = 500;
//         res.end('Internal Server Error');
//         return;
//       }

//       res.setHeader('Content-Type', 'application/json');
//       res.end(data);
//     });
//   } else {
//     res.statusCode = 404;
//     res.end('Error 404: Page noasdt found');
//   }
// });

// // Listen to the server on a specific port
// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });



const http = require('http');
const fs = require("fs")
// Create an HTTP resserver
const server = http.createServer((req, res) => {
    // Only allow GET requests

    // Handle routes
    if (req.url === '/a') {
        fs.readFile('style.css', (err, data) => {
            if (err) {
                res.end("Wrong")
            }

            res.end(data)

        })

    }
    else if (req.url === '/raw-html') {
        res.write('<h1>Welcome</h1>');
        res.end()
    } else if (req.url === '/users') {
        fs.readFile('users.json', (err, data) => {
            if (err) {
                console.log("wrong url");
                res.end("error page")
            }
            res.end(data)

        })

    }
    else {
        res.end("wrong page!")
    }

});

// Listen to the server on a specific port
const port = 3000;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
