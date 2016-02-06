'use strict';

app.controller('SyncObjectCtrl', ['$scope', 'syncObjectSvc',
  function ($scope, syncObjectSvc) {

    $scope.syncArray = syncObjectSvc.getSyncObjects();

    $scope.doesDataExist = function () {
      return $scope.syncArray.length > 0;
    };

    $scope.hasEmailProperty = function () {
      return _.has($scope.syncArray[0], 'email');
    };

    $scope.addSyncObjects = function () {
      var s = 'hi';
      var resident = new Resident('John Doe', 'April 5, 1990');
      syncObjectSvc.addSyncObjects(resident, s);
    };

    $scope.updateSyncObject = function () {
      var id = $scope.syncArray[0].$id;
      syncObjectSvc.updateSyncObject(id);
    };

    $scope.showPropertiesAndFunctions = function () {
      $scope.arraykeys = _.keys($scope.syncArray);
      $scope.arrayfunctions = _.functions($scope.syncArray);

      var resident = syncObjectSvc.getResident($scope.syncArray[0].$id);
      resident.$loaded()
        .then(function (item) {
          $scope.syncArray = item;
          $scope.objectkeys = _.keys(item);
          $scope.objectfunctions = _.functions(item);
        })
        .catch(function(error) {
          console.log("Error:", error);
        });
    };
  }
]);