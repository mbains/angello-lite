'use strict';

var app = angular.module('resourceExApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
