//import inquirer
const inquirer = require("inquirer");
//import jest
const jest = require("jest");
//require Engineer, intern, manager
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
//create a role id of 0
let roleId = 0;
//create empty array
let roleArray = [];


//create prompt user function with inquirer & question choices

//use switch case for if the user chooses engineer, intern or manager
//create user prompt for each role
function promptUser(answers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function (title) {
        console.log(title)
        if (role.role === "Engineer") {
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
                var newEngineer = new Engineer(engineerTitle.name, engineerTitle.email, uniqueId, engineerTitle.github);
                uniqueId = uniqueId++;
                console.log(newEngineer);
                teamArray.push(newEngineer);
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
                var newIntern = new Intern(internTitle.name, internTitle.email, uniqueId, internTitle.school);
                uniqueId = uniqueId++;
                console.log(newIntern)
                teamArray.push(newIntern);
                addUser();
            });
        } else if (title.role === "Manager") {
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
                    name: "office",
                    type: "input",
                    message: "What is your office number?"
                }
                //push answers to team array for each job resolve
            ]).then(function (managerTitle) {
                var newManager = new Manager(managerTitle.name, managerTitle.email, uniqueId, managerTitle.office);
                uniqueId = uniqueId++; 
                console.log(newManager);
                teamArray.push(newManager);
                addUser();
            });
        };

    })
        .catch(function (err) {
            console.log(err);
        });

};





//generate HTML 


