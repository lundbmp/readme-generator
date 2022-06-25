const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, userData) {
    fs.writeFile(fileName, userData, 'utf-8', (err) => {
        if(err) {
            console.log(err);
            return;
        }

        console.log("README.md is created!");
    });
};

module.exports = writeToFile;