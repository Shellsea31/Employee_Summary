// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// example
// const newWorker = new Employee("Shelsy", 50, "elainesbarrera@gmail.com");
// newWorker.getName();
// newWorker.getId();
// newWorker.getEmail();
// newWorker.getRole();

// console.log(newWorker);

////////////////////////////////////////////

module.exports = Employee;
