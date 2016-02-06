'use strict';

app.controller('BuildingCtrl', ['$scope', 'authSvc', 'Building',
  function ($scope, authSvc, Building) {

    authSvc.$onAuth(function(authData) {
      $scope.authData = authData;
    });

    // create a three-way binding to our building as $scope.building
    Building("-JhrHWAvjUWfQE02unPt").$bindTo($scope, "building");
  }
]);