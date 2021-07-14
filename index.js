//import inquirer
const inquirer = require("inquirer");
//import jest
const jest = require("jest");
//require Engineer, intern, manager
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
//write to html pageDisplay
const fs = require('fs');
const util = require("util");
const generateHTML = require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);
//create a role id of 0
let roleId = 0;
//create empty array
let roleArray = [];


//create prompt user function with inquirer & question choices

//use switch case for if the user chooses engineer, intern or manager
//create user prompt for each role
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern","Manager"]
        },
    ]).then(function (title) {
        console.log(title)
        if (title.role === "Engineer") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "github",
                    type: "input",
                    message: "What is your github Username?"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                }
                //push answers to team array for each job resolve
            ]).then(function (engineerTitle) {
              console.log(engineerTitle.name);
                var newEngineer = new Engineer(engineerTitle.name, engineerTitle.email, roleId, engineerTitle.github);
                roleId = roleId++;
                console.log(newEngineer);
                addUser();
                
            });

        } else if (title.role === "Intern") {
            inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "school",
                    type: "input",
                    message: "Where did you graduate from college?"
                }
                //push answers to team array for each job resolve
            ]).then(function (internTitle) {
                var newIntern = new Intern(internTitle.name, internTitle.email, roleId, internTitle.school);
                roleId = roleId++;
                console.log(newIntern)
                addUser();
            });
        } else if (title.role === "Manager") {
            return inquirer.prompt([
                {
                    name: "name",
                    message: "What is your name?",
                    type: "input"
                },
                {
                    name: "email",
                    type: "input",
                    message: "What is your email?"
                },
                {
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                }
                //push answers to team array for each job resolve
            ]).then(function (managerTitle) {
                var newManager = new Manager(managerTitle.name, managerTitle.email, roleId, managerTitle.office);
                roleId = roleId++; 
                console.log(newManager);
                addUser();
                return newManager;
            });
        };

    })
    
};


    function addUser(){
        inquirer.prompt([
            {   
                name: "continue",
                message: "Do you want to add another team member?",
                type: "confirm"
            }
        ]).then(function(confirmRes){
            confirmRes.continue && promptUser()
        })
    };


    async function generate() {

        // Ask user questions and generate responses
        const answer = await promptUser();
        const generateContent = generateHTML(answer);
        // Write new README.md to dist directory
        await writeFileAsync('./dist/index.html', generateContent, function (err, result) {
        });
}
generate();