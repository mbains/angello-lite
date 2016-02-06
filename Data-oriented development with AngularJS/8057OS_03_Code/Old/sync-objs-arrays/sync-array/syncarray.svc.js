'use strict';

app.factory('syncArraySvc', ['$firebase', 'FIREBASE_URI', function ($firebase, FIREBASE_URI) {
  var buildingsUri = FIREBASE_URI + '/buildings';
  var ref = new Firebase(buildingsUri);
  var sync = $firebase(ref);
  var buildings = sync.$asArray();

  var getBuildings = function () {
    return buildings;
  };

  var addBuilding = function (item) {
    buildings.$add(item);
  };

  var updateBuilding = function (id) {
    buildings.$save(id);
  };

  var removeBuilding = function (id) {
    buildings.$remove(id);
  };

  return {
    getBuildings: getBuildings,
    addBuilding: addBuilding,
    updateBuilding: updateBuilding,
    removeBuilding: removeBuilding
  }
}]);