'use strict';

app.controller('BuildingCtrl', ['$scope', '$routeParams', 'buildingSvc',
  function ($scope, $routeParams, buildingSvc) {

    var hasAnError = false;

    $scope.hasError = function () {
      return hasAnError;
    };

    if ($routeParams.buildingIndex !== null) {
      var index = parseInt($routeParams.buildingIndex);

      if (!isNaN(index)) {
        // create a three-way binding to our building as $scope.building
        buildingSvc.getBuilding(index).$bindTo($scope, "building");
      }
      else {
        hasAnError = true;
      }
    }
  }
]);