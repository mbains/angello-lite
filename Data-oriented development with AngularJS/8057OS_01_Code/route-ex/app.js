'use strict';

var app = angular.module('routeApp', [
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/employees', {
      templateUrl: 'employee.tpl.html',
      controller: 'EmployeeCtrl'
    })
    .when('/departments', {
      templateUrl: 'department.tpl.html',
      controller: 'DepartmentCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});