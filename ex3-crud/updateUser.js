const uniqid = require('uniqid');
const fs = require('fs');

const username = 'Ayal';

const updateUser = {
    id: uniqid(),
    username: 'Ayal',
    Email: 'Ayal@gmail.com',
}

const data = fs.readFileSync('users.json');
const myObject = JSON.parse(data);

if (!myObject.allUsers.find(user => user.username === username)) {
    console.log('There is no user with that username');
} else {
    const objIndex = myObject.allUsers.findIndex(obj => obj.username === username)
    myObject.allUsers[objIndex] = updateUser
    const newData = JSON.stringify(myObject);
    fs.writeFile("users.json", newData, (err) => {
        console.log("New data added");
    });
}