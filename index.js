const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role",
        message: "What is your role?",
      },
    ])
    .then(function (answers) {
      console.log(answers);
      console.log(answers.role);
      if (answers.role == "Manager") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "What is your ID?",
            },
            {
              type: "input",
              name: "email",
              message: "What is your Email?",
            },
            {
              type: "input",
              name: "number",
              message: "What is your office number?",
            },
          ])
          .then(function (ManagerAnswers) {
            console.log(ManagerAnswers);
            console.log(
              ManagerAnswers.id,
              ManagerAnswers.email,
              ManagerAnswers.number
            );
          });
      } else if (answers.role == "Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "What is your ID?",
            },
            {
              type: "input",
              name: "email",
              message: "What is your Email?",
            },
            {
              type: "input",
              name: "github",
              message: "what is your GitHub username?",
            },
          ])
          .then(function (EngineerAnswers) {
            console.log(EngineerAnswers);
            console.log(
              EngineerAnswers.id,
              EngineerAnswers.email,
              EngineerAnswers.github
            );
          });
      } else if (answers.role == "Intern");
      {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "id",
              message: "What is your ID?",
            },
            {
              type: "input",
              name: "email",
              message: "What is your Email?",
            },
            {
              type: "input",
              name: "school",
              message: "Which school did you attend?",
            },
          ])
          .then(function (InternAnswers) {
            console.log(InternAnswers);
            console.log(
              InternAnswers.id,
              InternAnswers.email,
              InternAnswers.school
            );
          });
      }
    });
}
function addMember() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Manager',
            'Engineer',
            'Intern',
            "No more team members",
          ],
        },
      ])
      .then((userChoice) => {
        if (answers.title == "Manager") {
          // do manager stuff
        }
      });
  }

// Function call to initialize app
init();


