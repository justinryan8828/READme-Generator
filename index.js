// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input

// description, installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give me a description of your project",
  },
  {
    type: "list",
    name: "license",
    message: "What type of license are you using?",
    choices: ["MIT", "BSD3.0", "APACHE2.0", "GPL3.0"],
  },
  {
    type: "input",
    name: "installation",
    message: "Installastion Instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use the repository?",
  },
  {
    type: "input",
    name: "contributions",
    message: "How can you contribute?",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions:",
  },
  {
    type: "list",
    name: "licenses",
    message: "What type of license are you using?",
    choices: ["MIT", "BSD3.0", "APACHE2.0", "GPL3.0"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readMeInfo = generateMarkdown(data);
    writeToFile("./output/README.md", readMeInfo);
  });
}

// Function call to initialize app
init();
