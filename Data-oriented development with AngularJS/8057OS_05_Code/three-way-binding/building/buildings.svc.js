'use strict';

app.factory("buildingSvc", ['FIREBASE_URI', '$firebaseArray', '$firebaseObject',
  function(FIREBASE_URI, $firebaseArray, $firebaseObject) {
    var buildingsUri = FIREBASE_URI + '/buildings';
    var buildingsRef = new Firebase(buildingsUri);
    var buildings = $firebaseArray(buildingsRef);

    var getBuildings = function () {
      return buildings;
    };

    var getBuilding = function (index) {
      var key = buildings.$keyAt(index);
      var buildingRef = buildingsRef.child(key);
      return $firebaseObject(buildingRef);
    };

    return {
      getBuildings: getBuildings,
      getBuilding: getBuilding
    }
  }]);