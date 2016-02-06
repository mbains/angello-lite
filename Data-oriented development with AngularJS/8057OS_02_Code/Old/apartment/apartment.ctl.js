'use strict';

app.controller('ApartmentCtrl', ['$scope', 'apartmentSvc',
  function ($scope, postCodeSvc) {

    $scope.postCodeData = {};

    var success = function (data, status, headers, config) {
      $scope.postCodeData.result = data.result;
    };

    var error = function (data, status, headers, config) {
      $scope.postCodeData.error = data;
    };

    // call this function which will get the
    // data asynchronously
    postCodeSvc.getRandomPostCode(success, error);
  }
]);