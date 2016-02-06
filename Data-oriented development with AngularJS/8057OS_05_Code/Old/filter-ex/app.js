'use strict';

var app = angular.module('filterApp', [
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'employee.tpl.html',
      controller: 'EmployeeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});