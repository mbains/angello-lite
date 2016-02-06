'use strict';

app.controller('PropertyCtrl', ['$scope', 'propertySvc',
  function ($scope, propertySvc) {

    $scope.syncArray = propertySvc.getSyncArray();

    $scope.doesDataExist = function () {
      return $scope.syncArray.length > 0;
    };

    $scope.showPropertiesAndFunctions = function () {
      $scope.arraykeys = _.keys($scope.syncArray);
      $scope.arrayfunctions = _.functions($scope.syncArray);

      var building = propertySvc.getSyncObject($scope.syncArray[0].$id);
      building.$loaded()
        .then(function (item) {
          $scope.objectkeys = _.keys(item);
          $scope.objectfunctions = _.functions(item);
        })
        .catch(function(error) {
          console.log("Error:", error);
        });
    };
  }
]);