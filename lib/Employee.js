// TODO: Write code to define and export the Employee class
const Employee = function (name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
};

Employee.prototype.getName = function () {
  return this.name;
};

Employee.prototype.getId = function () {
  return this.id;
};

Employee.prototype.getEmail = function () {
  return this.email;
};

Employee.prototype.getRole = function () {
  return "Employee";
};

// example
const newWorker = new Employee("Shelsy", 50, "elainesbarrera@gmail.com");
newWorker.getName();
newWorker.getId();
newWorker.getEmail();
newWorker.getRole();
console.log(newWorker);

////////////////////////////////////////////

module.exports = Employee;
