// TODO: Write code to define and export the Employee class
const Employee = function(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function(){
    return this.name
}


// example
const newWorker = new Employee("Shelsy", 50, "elainesbarrera@gmail.com");
newWorker.getName()
console.log(newWorker);

////////////////////////////////////////////

module.exports = Employee;