// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")


inquirer.prompt(
    [
        {
            type:"input",
            message:"What is the title of your project",
            name:"title"
            
            
        },

        {
            type:"input",
            message:"How do you install you app?",
            name:"Instructions"
 

        },

        {
            type:"input",
            message:"Instructions to be follow?",
            name:"Instructions"
      

        },

        {
            type:"input",
            message:"Any Credits?",
            name:"Instilation"
            

        },
        {
            type:"input",
            message:"How do you use your app?",
            name:"usage"
            

        },
        {
            // list licesne
            type:"list",
            message:"What license did you use?",
            name:"License",
            choices: ["The MIT Licesne", "The Apache licesne", "The GPL Licesne", 'N/A']
            

        },
        {
        type:"input",
        message:"Github Username:",
        name:"git",
               

    },
    {
        type:"input",
        message:"email:",
        name:"email",
        
        }
    ]
).then(answers =>{
    console.log(answers.title)
    fs.writeFileSync("./dist/README.md",
`
# ${answers.title}
`
`
## ${answers.instalation}
`
    )
})





const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
