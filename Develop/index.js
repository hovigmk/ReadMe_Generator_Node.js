// Including packages needed for this application

const fs = require("fs");

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// function to generate the ReadMe here
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, generateMarkdown(data), function (err) {
//     if (err) {
//       return console.log(err);
//     }
//   });
// }

// fs.writeFile(fileName, generateMarkdown(data), (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// function to initalize the beginning of the questions

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    data.getLicense = getLicense(data.license);
    writeToFile("./example/README.md", data);
  });
}

//  const init = () => {
//  inquirer.prompt(questions).then((data) => {
//     console.log(JSON.stringify(data, null, " "));
//     data.getLicense = getLicense(data.license);
//     writeToFile("./example/README.md", data);
//   });
// }

// Function call to initialize app
init();
