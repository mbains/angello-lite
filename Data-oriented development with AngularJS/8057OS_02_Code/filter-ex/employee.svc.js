'use strict';

app.service('employeeSvc', function () {

  var Employee = function (name, age) {
    this.name = name;
    this.age = age;
  };

  var getEmployees = function () {
    return [
      new Employee("First employee", 56),
      new Employee("First old employee", 58),
      new Employee("Second employee", 44),
      new Employee("Second old employee", 59),
      new Employee("Last employee", 32)
    ];
  };

  // Public API
  this.Employee = Employee;
  this.getEmployees = getEmployees;
});