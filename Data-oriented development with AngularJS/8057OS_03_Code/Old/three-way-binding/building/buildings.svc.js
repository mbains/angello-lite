'use strict';

app.factory("Building", ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI) {
  return function(buildingId) {
    var buildingsUri = FIREBASE_URI + '/buildings';

    // create a reference to the building
    var ref = new Firebase(buildingsUri).child(buildingId);

    // return it as a synchronized object
    return $firebase(ref).$asObject();
  }
}]);