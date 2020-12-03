// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

const Intern = function(name, id, email, school){
    Employee.call(this, name, id, email)
    this.school = school
}

Intern.prototype.getRole = function(){
    return "Intern"
}


// example
const newWorker = new Intern("Shelsy", 50, "elainesbarrera@gmail.com", "UCLA");
console.log(newWorker)

//////////////////////////////////////////////////////
module.exports = Intern