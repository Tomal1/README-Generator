const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([{
        type: "input",
        name: "ProjectTitle",
        message: "please input a descriptive title for this product"
    },{
        type: "input",
        name: "Description",
        message:"please describe why this product was built and what problems does it solve?",
    },{
        type:"input",
        name: "Installation",
        message:"dose the product need to be installed? if so please elaborate",
    },{
        type:"input",
        name: "Usage",
        message:"please provide instructions and examples on how to use this product",
    },{
        type:"list",
        name: "License",
        choices: ["N/A", "Apache", "GNU", "MIT"],
        message:"please choose a license?",
    },{
        type:"input",
        name: "Contributing",
        message:"please provide: attribution, references and links for work that has been used to assist in this project",
    },{
        type:"input",
        name: "Tests",
        message:"write tests for your application. Then provide examples on how to run them here",
    },{
        type:"input",
        name: "GitHub",
        message:"please enter GitHub username",
    },{
        type:"input",
        name: "Links",
        message:"please enter links to deployed websites or other relevant links hear",
    },{
        type:"input",
        name: "Email",
        message:"please enter email address",
    }])
    
    // note that in the table of contents the #section title (within the normal brackets) have to be in lowercase
.then(response => { 
fs.writeFile("README.md",
`# ${response.ProjectTitle}\n
![${response.License}](https://img.shields.io/badge/license-${response.License}-green)

## Table of Contents
* [Description](#description) 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${response.Description}

## Installation
${response.Installation}

## Usage
${response.Usage}

## License
This application is covered under ${response.License} license, NOTE - N/A means not applicable

## Contributing
The License badges displayed above were created using the assistance of https://shields.io/ , please visit their website for more information\n 
${response.Contributing}


## Usage
${response.Contributing}

## Tests
${response.Tests}

## Questions
${response.GitHub}\n
${response.Links}\n
${response.Email}`,

err => err ? console.error(err) : console.log("File written")
)})