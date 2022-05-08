const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Lib/Manager");
const Intern = require("./Lib/Intern");
const Engineer = require("./Lib/Engineer");
// TODO: Create an array of questions for user input
const team = [];

//[
//{Manager:{1,manager@manager.com}},
//{Intern},
//{Engineer}
//]

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
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
              name: "number",
              message: "What is your office number?",
            },
          ])
          .then(function (ManagerAnswers) {
            // if you want another employee
            console.log(ManagerAnswers);
            console.log(
              ManagerAnswers.id,
              ManagerAnswers.email,
              ManagerAnswers.number
            );
            // add the manager answers intro the array as an object
            //here you will use your Lib classes to pass the data and get a Manager back
            const manager = new Manager(
              ManagerAnswers.name,
              ManagerAnswers.id,
              ManagerAnswers.email,
              ManagerAnswers.number
            );
            team.push(manager);

            addemployee();
          });
      } else if (answers.role == "Engineer") {
        return inquirer
          .prompt([
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
          .then(function (EngineerAnswers) {
            console.log(EngineerAnswers);
            console.log(
              EngineerAnswers.id,
              EngineerAnswers.email,
              EngineerAnswers.github
            );
            // add the enginner answers intro the array as an object
            //here you will use your Lib classes to pass the data and get a Engineer back
            const engineer = new Engineer(
              EngineerAnswers.name,
              EngineerAnswers.id,
              EngineerAnswers.email,
              EngineerAnswers.github
            );
            team.push(engineer);

            addemployee();
          });
      } else if (answers.role == "Intern");
      {
        return inquirer
          .prompt([
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
            // add the enginner answers intro the array as an object
            //here you will use your Lib classes to pass the data and get a Enginner back
            const intern = new Intern(
              InternAnswers.name,
              InternAnswers.id,
              InternAnswers.email,
              InternAnswers.school
            );
            team.push(intern);

            addemployee();
          });
      }
    });
}
function addemployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Do you want to add an new employer?",
        choices: ["Yes", "No"],
      },
    ])
    .then(function (answers) {
      console.log(answers);
      console.log(answers.role);
      if (answers.role == "Yes") {
        init();
      } else {
        // console.log(team);
        //send that team array into the createHTML function
        const html = createHTML(team);
        fs.writeFileSync("./Dist/index.html", html, "utf-8");
        console.log("done");
        //use the html to write to file and create the actual file
      }
    });
}

function createHTML(team) {
  function generateEngineer(engineer) {
    //create the card with the data
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 style="color:red" class="card-title">${engineer.name}</h5>
    <a target="_blank" href="https://github.com/${engineer.github}" class="card-text">${engineer.github}</a>
    <a href="mailto:${engineer.email}" class="btn btn-primary">${engineer.email}</a>
  </div>
</div>
    `;
  }
  function generateManager(manager) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 style="color:orange" class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.officeNumber}</p>
    <a href="mailto:${manager.email}" class="btn btn-primary">${manager.email}</a>
  </div>
</div>
    `;
  }
  function generateIntern(intern) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 style="color:cyan" class="card-title">${intern.name}</h5>
    <p class="card-text">${intern.school}</p>
    <a href="mailto:${intern.email}" class="btn btn-primary">${intern.email}}</a>
  </div>
</div>
    `;
  }

  const cards = [];
  //Im adding to my cards array the values from my team array that have the Manager role and passing that
  //through the function that gets the data into the card
  cards.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  cards.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  cards.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );

  const finalCards = cards.join("");

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <link rel="stylesheet" href="style.css" />
      <title>Team Profile Generator</title>
    </head>
    <body>
      <header>
        <div class="jumbotron text-center">
          <h1>Team Member</h1>
        </div>
      </header>
      <div class='cards'>
       
         ${finalCards}
      
      </div>
    </body>
  </html>
  
  
  `;
}
init();
