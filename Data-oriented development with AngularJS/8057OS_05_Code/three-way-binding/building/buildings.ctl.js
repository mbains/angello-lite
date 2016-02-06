'use strict';

app.controller('BuildingsCtrl', ['$scope', 'buildingSvc',
  function ($scope, buildingSvc) {
    $scope.buildings = buildingSvc.getBuildings();
  }
]);
