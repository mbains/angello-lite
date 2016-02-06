'use strict';

var app = angular.module('collectionBindingApp', [
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