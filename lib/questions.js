// checks for no input

const check = (answer)=>{
  if (answer !== "") {
    return true
  } else return "Please answer the question."
}

// ask employee questions
const questions = [
    {
      type: "input",
      name: "name",
      message: "Type your name.",
      validate: (answer)=>{
        if (answer !== "") {
          return true
        } else return "Please answer the question."
      }
    },
    {
      type: "input",
      name: "id",
      message: "Type you id.",
      validate: (answer)=>{
        if (answer !== "") {
          return true
        } else return "Please answer the question."
      }
    },
    {
      type: "input",
      name: "email",
      message: "Type you email.",
      validate: (answer)=>{
        if (answer !== "") {
          return true
        } else return "Please answer the question."
      }
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