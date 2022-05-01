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
        name: "title",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
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
    .then(function (answers) {
      console.log(answers);
      console.log(answers.role);
      if (answers.role == "Manager") {
        inquirer
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
            console.log(ManagerAnswers.email);
          }); 
         
          else if(answers.role == "Engineer") {
          inquirer
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
                console.log(EngineerAnswers.email);
              });
    });


// Function call to initialize app
init();
