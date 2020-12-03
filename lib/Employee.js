// TODO: Write code to define and export the Employee class
const Employee = function(name, testValue){
    this.name = name;
    this.id = testValue;
}


// exmaple
// const newWorker = new Employee("Shelsy", 1000);
// console.log(newWorker);

////////////////////////////////////////////

module.exports = Employee;