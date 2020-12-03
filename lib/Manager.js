// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

const Manager = function(name, id, email, num){
    Employee.call(this, name, id, email)
    this.officeNumber = num
}

Manager.prototype.getRole = function(){
    return "Manager"
}

// example
const newWorker = new Manager("Shelsy", 50, "elainesbarrera@gmail.com", 205);
console.log(newWorker);

//////////////////////////////////////
module.exports = Manager