'use strict';

var app = angular.module('ajaxApp', [
  'ngRoute'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'postcode.tpl.html',
      controller: 'PostCodeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});