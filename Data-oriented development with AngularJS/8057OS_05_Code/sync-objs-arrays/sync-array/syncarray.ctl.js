'use strict';

app.controller('SyncArrayCtrl', ['$scope', 'syncArraySvc',
  function ($scope, syncArraySvc) {

    $scope.building = new Building();

    $scope.buildings = syncArraySvc.getBuildings();

    $scope.addBuilding = function () {
      syncArraySvc.addBuilding(angular.copy($scope.building));
      $scope.building = new Building();
    };

    $scope.updateBuilding = function (id) {
      syncArraySvc.updateBuilding(id);
    };

    $scope.removeBuilding = function (id) {
      syncArraySvc.removeBuilding(id);
    };
  }
]);