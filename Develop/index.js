// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileWriter = require('./utils/fileWriter.js');
const questions = require('./utils/questions.js');


function promptUser(questionArray) {
    return inquirer.prompt(questionArray);
}

// TODO: Create a function to initialize app
async function init() {
    const userData = await promptUser(questions);
    const markDownData = await generateMarkdown(userData);
    fileWriter();
    console.log(userInfo);
};


// Function call to initialize app
init();
