'use strict';

var app = angular.module('directiveWithTemplateUrlApp', [
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'employee-view.tpl.html',
      controller: 'EmployeeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});