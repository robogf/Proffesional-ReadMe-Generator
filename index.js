// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const userRead = require ("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'projectTitle',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name:'Description',
    message: 'Entere a description of your project',

},
{
    type:'input',
    name: 'installation',
    message: 'Enter installation instructions for your project',
},
{
    type:'input',
    name: 'usage',
    message:'Enter the usage of your project',
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter any tests from your project',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter a list of contributors',
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your github'


},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email'
},
{
    type: 'list',
    name: 'license',
    message: "Which license would you like to chose?",
    choices: ['none','Apache', 'Boost','Eclipse','BSD','IBM','ISC','MIT','Mozilla','SIL']
     
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err): console.log('successfully wrote README'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function(data){
        let file = "samepleREADME.md"
        writeToFile(file,userRead(data));
    });
    
};

// Function call to initialize app
init();
