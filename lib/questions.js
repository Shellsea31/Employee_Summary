// ask employee questions
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