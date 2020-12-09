// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, username) {
    super(name, id, email);
    this.github = username;
    this.role = "Engineer";
  }
  getRole() {
    return this.role;
  }

  getGithub() {
    return this.github;
  }
}

// example
// const newWorker = new Engineer(
//   "Shelsy",
//   50,
//   "elainesbarrera@gmail.com",
//   "Shellsea31"
// );
// console.log(newWorker);

module.exports = Engineer;
