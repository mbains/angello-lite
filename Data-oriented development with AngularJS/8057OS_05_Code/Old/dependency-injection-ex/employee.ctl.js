'use strict';

app.controller('EmployeeCtrl', ['$scope', 'employeeSvc',
  function ($scope, employeeSvc) {

    $scope.employeeData = {
      employees: employeeSvc.GetEmployees()
    };
  }
]);