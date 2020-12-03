// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

const Engineer = function (name, id, email, username){
    Employee.call(this, name, id, email)
    this.github = username
}

const newWorker = new Engineer("Shelsy", 50, "elainesbarrera@gmail.com", "Shellsea31");
console.log(newWorker);

module.exports = Engineer;