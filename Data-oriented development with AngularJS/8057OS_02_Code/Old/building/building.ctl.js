'use strict';

app.controller('BuildingCtrl', ['$scope', 'buildingSvc',
  function ($scope, buildingSvc) {

    $scope.building = new Building(0, '');

    $scope.buildings = buildingSvc.getBuildings();

    $scope.addBuilding = function () {
      buildingSvc.addBuilding(angular.copy($scope.building));
      $scope.building = new Building(0, '');
    };

    $scope.updateBuilding = function (id) {
      buildingSvc.updateBuilding(id);
    };

    $scope.removeBuilding = function (id) {
      buildingSvc.removeBuilding(id);
    };
  }
]);