const fs = require('fs');

const username = 'sAml';

const data = fs.readFileSync('users.json');
const myObject = JSON.parse(data);
if (myObject.allUsers.find(user => user.username === username)) {
    console.log(myObject.allUsers.find(user => user.username === username));

} else {
    console.log('There is no user with that username');
}