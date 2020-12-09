// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getRole() {
    return this.role;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

// example
// const newWorker = new Manager("Shelsy", 50, "elainesbarrera@gmail.com", 205);
// // console.log(newWorker);

//////////////////////////////////////
module.exports = Manager;
