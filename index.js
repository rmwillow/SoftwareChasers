const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];

function NewEmployee() {
  console.log("Build your team!");
  return inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Which team member would you like to add?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "No more team members to add",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.employee) {
        case "Manager":
          AddManager();
          break;
        case "Engineer":
          AddEngineer();
          break;
        case "Intern":
          AddIntern();
          break;
        case "No more team members to add":
          render(team);
          GenerateHTML();
      }
    });
}

function AddManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
      },
    ])

    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(manager);
      NewEmployee();
    });
}

function AddEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your engineer's Github username?",
      },
    ])

    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(engineer);
      NewEmployee();
    });
}

function AddIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What school does your intern attend?",
      },
    ])

    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(intern);
      NewEmployee();
    });
}

function GenerateHTML() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFile(outputPath, render(team), function (err) {
    if (err) throw err;
    console.log(
      "Your HTML has been generated and loaded into the output folder!"
    );
  });
}

NewEmployee();
