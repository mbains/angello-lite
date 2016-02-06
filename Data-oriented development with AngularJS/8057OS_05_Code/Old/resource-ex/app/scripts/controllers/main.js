'use strict';

app.controller('MainCtrl', ['$scope', 'employeeSvc',
  function ($scope, employeeSvc) {

    var Employee = employeeSvc.Employee;
    var employees = Employee.query();
    var employee = Employee.get({ id: 1 });

    $scope.employeeData = {
      employees: employees,
      employee: employee
    };
  }
]);
