const uniqid = require('uniqid');
const fs = require('fs');

const newUser = {
    id: uniqid(),
    username: 'Ale1',
    Email: 'ale12@gmail.com',
}

const data = fs.readFileSync('users.json');
const myObject= JSON.parse(data);


if(myObject.allUsers.find(user=>user.Email === newUser.Email)){
    console.log('There already an email try again');
} else {
    myObject.allUsers.push(newUser);
    const newData = JSON.stringify(myObject);
    fs.writeFile("users.json", newData, (err) => {
        console.log("New data added");
      });
}


