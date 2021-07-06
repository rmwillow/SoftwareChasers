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
function promptUser(answers) {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "what is your role?",
            choices: ["Engineer", "Intern", "Manager"]
        },
    ]).then(function (res) {
        // should use switch case instead of if/else starting here
        console.log(res)
        if (res.role === "Engineer") {
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
           
            }
//use switch case for if the user chooses engineer, intern or manager
//create user prompt for each role


//push answers to team array for each job resolve

//generate HTML 


