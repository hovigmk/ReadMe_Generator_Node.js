// Including packages needed for this application

const fs = require("fs");

const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  // Question for the project Description
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
  },

  // Table of Contents, andling this in the markdown.js

  // Question for Installation
  {
    type: "input",
    name: "installation",
    message:
      "Enter an explanation how to install the software, or commands for the program.",
  },

  // Question for Usage
  {
    type: "input",
    name: "usage",
    message: "Enter describe how we can use this program/project.",
  },

  // Question for Credits
  {
    type: "input",
    name: "Credits",
    message:
      "Enter the resources or the people if any that helped you with this project",
  },
  // Question for License
  {
    type: "list",
    name: "license",
    message: "Select a license for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "MPL 2.0",
      "Apache 2.0",
      "Boost Software 1.0",
      "MIT",
      "MIT",
      "Unlicense",
    ],
  },

  // Question for Contributing
  {
    type: "input",
    name: "contributing",
    message: "How can users contribute to your project.",
  },

  // Question for Tests
  {
    type: "input",
    name: "tests",
    message:
      "Please enter any testing instructions you would like to provide for this project.",
  },

  // QUESTIONS section -- github
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
];

// function to generate the ReadMe here
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
};
// function to initalize the beginning of the questions

const init = () => {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    // data.renderLicenseBadge = renderLicenseBadge(data.license);
    // data.renderLicenseLink = renderLicenseLink(data.license);
    writeToFile("./assets/README.md", data);
  });
};

// Function call to initialize app
init();
