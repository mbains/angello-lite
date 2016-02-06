'use strict';

app.factory('propertySvc', ['$firebase', 'FIREBASE_URI', function ($firebase, FIREBASE_URI) {
  var buildingsUri = FIREBASE_URI + '/buildings';
  var ref = new Firebase(buildingsUri);
  var sync = $firebase(ref);
  var buildings = sync.$asArray();

  var getSyncArray = function () {
    return buildings;
  };

  var getSyncObject = function (id) {
    var syncChild = $firebase(ref.child(id));
    return syncChild.$asObject();
  };

  return {
    getSyncArray: getSyncArray,
    getSyncObject: getSyncObject
  }
}]);
