'use strict';

app.service('employeeSvc', function () {

  var Employee = function (name, age) {
    this.name = name;
    this.age = age;
  };

  var GetEmployees = function () {
    return [
      new Employee("First employee", 56),
      new Employee("Second employee", 44),
      new Employee("Last employee", 32)
    ];
  };

  // Public API
  this.Employee = Employee;
  this.GetEmployees = GetEmployees;
});