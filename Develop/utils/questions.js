// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'githubName',
    message: 'What is your github name?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your github name!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'repoLink',
    message: 'What is the repo link of your project?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your project.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please describe your project!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'install',
    message: 'How do you install and run your project?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to tell me how to install and run your project!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Tell me how to use your project!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'credit',
    message: 'Who contributed to this project?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Someone must have worked on this project!');
          return false;
        }
    }
},
{
    type: 'list',
    name: 'liscense',
    message: 'What liscense are you using?',
    choices: ['MIT'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('please select a liscense');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contribute',
    message: 'How can someone contribute to this project?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('I need to know how to!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'test',
    message: 'What are some tests for your projects?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please test your code!');
          return false;
        }
    }
}];

module.exports = questions;