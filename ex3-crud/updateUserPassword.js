const fs = require('fs');

const username = 'Aml'
const newPassword = '1234'

const data = fs.readFileSync('users.json');
const myObject= JSON.parse(data);

if (!myObject.allUsers.find(user => user.username === username)) {
    console.log('There is no user with that username');
} else {
    const objIndex = myObject.allUsers.findIndex(obj => obj.username === username)
    myObject.allUsers[objIndex].password = newPassword
    const newData = JSON.stringify(myObject);
    fs.writeFile("users.json", newData, (err) => {
        console.log("New data added");
    });
}












// const http = require('http');
// // const fs=require("fs")
// // Create an HTTP resserver
// const server = http.createServer((req, res) => {
//     // Only allow GET requests

//     // Handle routes
//     if (req.url === '/raw-html') {
//         res.write('<h1>Welcome</h1>');
//     } else {
//         res.write('Error 404: Page not found');
//     }

//     // if(req.url==='/users'){
//     //   const getFile= fs.readFileSync("users.json")
//     //   const PrintData=JSON.stringify(getFile)
//     //   fs.writeFile("users.json",PrintData,()=>{
//     //     console.log("json list");
//     //   })
        

//     // }


// });

// // Listen to the server on a specific port
// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
