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
        choices: ["N/A", "Apache License 2.0", "GNU General Public License v3.0",
                "MIT License", "BSD 2-Clause License", "BSD 3-Clause License", 
                "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", 
                "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", 
                "Mozilla Public License 2.0", "The Unlicense"],
        message:"please choose a license?",
    },{
        type:"input",
        name: "Contributing",
        message:"please provide: attribution, references and links for work that has been used to assist in this project",
    },{
        type:"input",
        name: "Tests",
        message:"write tests for your application. Then provide examples on how to run them here",
}])
    
    
.then(response => { 
fs.writeFile("README.md",
`# ${response.ProjectTitle}\n

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Description
${response.Description}

## Installation
${response.Installation}

## Usage
${response.Usage}

## License
${response.License}

## Usage
${response.Contributing}

## Tests
${response.Tests}`,

err => err ? console.error(err) : console.log("File written")
)})