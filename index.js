const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
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
]).then(response => { 

    fs.writeFile("README.md",`# ${response.ProjectTitle}\n`, err =>{
        if (err){
            console.error(err)
            return;
        }
        fs.appendFile("README.md",`\n## Description\n${response.Description}`, err =>{
            if (err){
                console.error(err)
                return;
            }
            fs.appendFile("README.md",`\n## Installation\n${response.Installation}`, err =>{
                if (err){
                    console.error(err)
                    return;
                }
                fs.appendFile("README.md",`\n## Usage\n${response.Usage}`, err =>{
                    if (err){
                        console.error(err)
                        return;
                    }
                    fs.appendFile("README.md",`\n## Usage\n${response.Contributing}`, err =>{
                        if (err){
                            console.error(err)
                            return;
                        }
                        fs.appendFile("README.md",`\n## Usage\n${response.Tests}`, err =>{
                            if (err){
                                console.error(err)
                                return;
                            }
                            console.log("File written");
                        })
                    })

                })
                
            })
        })
    })
})