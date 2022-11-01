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
            name:"installation"
 

        },

        {
            type:"input",
            message:"Instructions to be follow?",
            name:"instructions"
      

        },

        {
            type:"input",
            message:"Any Credits?",
            name:"credit"
            

        },
        {
            type:"input",
            message:"How do you use your app?",
            name:"usage"
            

        },
        {
            // list license
            type:"list",
            message:"What license did you use?",
            name:"license",
            choices: ["The MIT License", "The Apache license", "The GPL License", 'N/A']
            

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
).then (({
    title,
    installation,
    instructions,
    credit,
    license,
    usage,
    git,
    email

})=>{
    //Template to be used
    const template = `# ${title}

![GitHub profile](https://img.shields.io/badge/Github-${git}-brightgreen)

*[Installation](#installation)
*[Usage](#usage)
*[Credits](#credit)
*[License](#license)
# Installation 
${installation} 
## Usage
${usage}   
### Instructions
${instructions}
## Credits
${credit}
## License
${license}

# contact
* Github:${git}
* E-mail: ${email}`;
createNewFile(title,template);
  }
  );
function createNewFile(fileName, data){
    fs.writeFile(`./dist/${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if (err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })

}










const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
