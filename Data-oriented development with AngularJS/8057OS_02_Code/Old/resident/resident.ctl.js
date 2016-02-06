'use strict';

app.controller('ResidentCtrl', ['$scope', 'residentSvc',
  function ($scope, residentSvc) {

    $scope.postCodeData = {};

    var success = function (data, status, headers, config) {
      $scope.postCodeData.result = data.result;
    };

    var error = function (data, status, headers, config) {
      $scope.postCodeData.error = data;
    };

    // call this function which will get the
    // data asynchronously
    residentSvc.getRandomPostCode(success, error);
  }
]);