'use strict';

app.controller('EmployeeCtrl', ['$scope',
  function ($scope) {

    $scope.buttonClick = function (message) {
      alert(message);
    }
  }
]);