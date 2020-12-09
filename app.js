const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// const { listenerCount } = require("process");
// const Employee = require("./lib/Employee");
const questions = require("./lib/questions");
const newMember = require("./lib/newMember");

let arr = [];

// function to prompt employee questions
const getEmployee = () => {
  inquirer
    // questions exported from library
    .prompt(questions)
    .then((answers) => {
      if (answers.role === "Engineer") {
        addEngineer(answers);
      } else if (answers.role === "Intern") {
        addIntern(answers);
      } else
        addManager(answers);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

// function to ask for new member
// if user wants to add new member reruns getEmployee()
// if user has entered all desired employees, write the directory and file
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

const addEngineer = (answers) => {
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
    .then((github) => {
      let response = { ...answers, ...github };
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
};

const addIntern = (answers) => {
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
    .then((school) => {
      let response = { ...answers, ...school };
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
};

const addManager = (answers) => {
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
}

// function to create a directory if no directory exists and the write a file inside of it
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

// function to push new team members to empty "arr"
const pushMember = (res) => {
  arr.push(res);
};

const checkManager = () => {
  console.log(arr);
};

getEmployee();
