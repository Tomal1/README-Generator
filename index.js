// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "ProjectTitle",
        message: "please input a descriptive title for this project"
    },
    {
        type: "input",
        name: "Description",
        message:"please describe why this project was built and what problems does it solve?",
    },    
    {
        type:"input",
        name: "Installation",
        message:"dose the product need to be installed? if so please elaborate",
    },
    {
        type:"input",
        name: "Usage",
        message:"please provide instructions and examples on how to use this product",
    },
    // {
    //     type:"list",
    //     name: "license",
    //     choices: ["MIT", "GPL", "Apache", "GNU", 'N/A'],
    //     message:"write tests for your application. Then provide examples on how to run them here",
    // },    
    {
        type:"input",
        name: "Contributing",
        message:"please provide: attribution, references and links for work that has been used to assist in this project",
    },
    {
        type:"input",
        name: "Tests",
        message:"write tests for your application. Then provide examples on how to run them here",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
