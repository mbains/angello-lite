'use strict';

var app = angular.module('atScopeApp', [
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