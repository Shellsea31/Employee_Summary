// need github for engineer, school for intern, office number for manager
// possible if statement
const questions = [
    {
      type: "input",
      name: "name",
      message: "Type your name.",
    },
    {
      type: "input",
      name: "id",
      message: "Type you id.",
    },
    {
      type: "input",
      name: "email",
      message: "Type you email.",
    },
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: [
        {
          name: "Employee",
          value: "Employee",
        },
        {
          name: "Engineer",
          value: "Engineer",
        },
        {
          name: "Intern",
          value: "Intern",
        },
        {
          name: "Manager",
          value: "Manager",
        },
      ],
    },
  ];

  module.exports = questions;