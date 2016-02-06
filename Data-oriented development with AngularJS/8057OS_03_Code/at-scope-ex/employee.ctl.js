'use strict';

app.controller('EmployeeCtrl', ['$scope',
  function ($scope) {
    $scope.person = {
      firstName: 'Bruce',
      lastName: 'Lee'
    };
  }
]);