// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }
  getRole() {
    return this.role;
  }

  getSchool() {
    return this.school;
  }
}

// example
// const newWorker = new Intern("Shelsy", 50, "elainesbarrera@gmail.com", "UCLA");
// console.log(newWorker);

//////////////////////////////////////////////////////
module.exports = Intern;
