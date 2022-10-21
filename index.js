// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project."
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ["None", "Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "GNU General Public License v3.0", "GNU General Public License v2.0", "GNU Affero General Public v3.0", "MIT License", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: 'input',
        name: 'install',
        message: "What does the user need to know about installing the repo?"
    },
    {
        type: 'input',
        name: 'test',
        message: "What command should be run to run tests?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about using the repo?"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What does the user need to know about contributing to the repo?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created a README file'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("generated-README.md", generateMarkdown(answers))
        });
}

// Function call to initialize app
init();
