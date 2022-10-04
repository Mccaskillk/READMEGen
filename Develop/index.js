// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {

            
            type: 'input',
            name: 'Description',
            message: 'Please provide a description for your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            
            type: 'input',
            name: 'Table of Contents',
            message: 'input a table of contents to make it easy for users to find what they need.',
            validate: contentInput => {
                if (contentInput) {
                    return true;
                } else {
                    console.log('You need to enter the table of contents for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please enter the step-by-step instructions to install your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to enter the steps to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You need to enter instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Please select the license you want to use for your project.',
            choices: ['MIT']   
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Input your guidelines for how other developers can contribute your work.',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('You need to enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Please provide examples for how to run tests for your project.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You need to enter test instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Enter your contact info in case another developer has questions about your project.',
            validate: questionInput => {
                if (questionInput) {
                    return true;
                } else {
                    console.log('You need to enter your contact info (e.g. your email)!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        writeToFile("README.md", answers)
      })
  }
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
    fs.writeFile(fileName, markdown(data), (err) => {
      if (err) throw err;
      console.log('readme file created!');
    })
  }

// TODO: Create a function to initialize app
function init() { }

/// Function call to initialize app
promptUser();