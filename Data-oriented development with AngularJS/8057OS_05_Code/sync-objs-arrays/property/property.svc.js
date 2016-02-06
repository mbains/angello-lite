'use strict';

app.factory('propertySvc', ['FIREBASE_URI', '$firebaseArray', '$firebaseObject',
  function (FIREBASE_URI, $firebaseArray, $firebaseObject) {
    var buildingsUri = FIREBASE_URI + '/buildings';
    var ref = new Firebase(buildingsUri);
    var buildings = $firebaseArray(ref);

    var getSyncArray = function () {
      return buildings;
    };

    var getSyncObject = function (id) {
      return $firebaseObject(ref.child(id));
    };

    return {
      getSyncArray: getSyncArray,
      getSyncObject: getSyncObject
    }
  }]);
