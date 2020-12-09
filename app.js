const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");
const Employee = require("./lib/Employee");
const questions = require("./lib/questions");
const check = require("./lib/questions");
const newMember = require("./lib/newMember");

let arr = [];

// function to prompt employee questions
const getEmployee = () => {
  inquirer
    // questions exported from library
    .prompt(questions)
    .then((answers) => {
      // engineer asks github
      if (answers.role === "Engineer") {
        inquirer
          .prompt({
            type: "input",
            name: "github",
            message: "What is your Github username?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              } else return "Please provide an answer.";
            },
          })
          // add original answers and github answer to 'response'
          .then((github) => {
            let response = { ...answers, ...github };
            console.log(response);
            const newEngineer = new Engineer(
              response.name,
              response.id,
              response.email,
              response.github
            );
            pushMember(newEngineer);
          })
          .then(() => {
            addMember();
          });
        // interns asks for school
      } else if (answers.role === "Intern") {
        inquirer
          .prompt({
            type: "input",
            name: "school",
            message: "What is your school?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              } else return "Please provide an answer.";
            },
          })
          // add original answers and school answer to 'response'
          .then((school) => {
            let response = { ...answers, ...school };
            console.log(response);
            const newIntern = new Intern(
              response.name,
              response.id,
              response.email,
              response.school
            );
            pushMember(newIntern);
          })
          .then(() => {
            addMember();
          });
        // manager asks for office number
      } else
        inquirer
          .prompt({
            type: "input",
            name: "number",
            message: "What is your office number?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              } else return "Please provide an answer.";
            },
          })
          // add original answers and number answer to 'response'
          .then((number) => {
            const response = { ...answers, ...number };
            console.log(response);
            const newManager = new Manager(
              response.name,
              response.id,
              response.email,
              response.number
            );
            pushMember(newManager);
          })
          .then(() => {
            addMember();
          });
      // just reg employee console log answers
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(
          "This prompt could not be rendered in the current environment"
        );
      }
      // possible else statement
    });
};

const addMember = () => {
  inquirer.prompt(newMember).then((confirmation) => {
    switch (confirmation.add) {
      case true:
        getEmployee();

        break;

      case false:
        writeIt();
        break;
      default:
        break;
    }
  });
};

const writeIt = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  fs.writeFile(outputPath, render(arr), (err) => {
    if (err) throw err;
    console.log(
      "Congratulations! Your file has been created. Look inside the folder 'output' and view your final product."
    );
  });
  // render(arr);
};

const pushMember = (res) => {
  arr.push(res);
};

getEmployee();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// fs.writeFile("index.html", "data", (err) => {
//   if (err) throw err;
//   console.log("written");
// });

//   if (confirmation.add) {
//     getEmployee();
//   } else {
//     () => {
//       if (!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR);
//       }

//       fs.writeFile(outputPath, render(arr), (err) => {
//         if (err) throw err;
//         console.log("written");
//       });
//       // render(arr);
//     };
//   }
