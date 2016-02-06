'use strict';

app.factory('syncObjectSvc', ['$firebase', 'FIREBASE_URI', function ($firebase, FIREBASE_URI) {
  var ref = new Firebase(FIREBASE_URI);
  var sync = $firebase(ref.child('objects'));
  var syncObjects = sync.$asArray();

  var getSyncObjects = function () {
    return syncObjects;
  };

  var getResident = function (id) {
    var syncChild = $firebase(ref.child('syncObjects').child(id));
    return syncChild.$asObject();
  };

  var addSyncObjects = function (item1, item2) {
    syncObjects.$add(item1);
    syncObjects.$add(item2);
  };

  var updateSyncObject = function (id) {
    var syncObj = $firebase(ref.child('objects').child(id));
    var resident = syncObj.$asObject();

    resident.$loaded()
      .then(function(item) {
        item.email = 'email@gmail.com';
        item.$save();
      })
      .catch(function(error) {
        console.error("Error:", error);
      });
  };

  return {
    getSyncObjects: getSyncObjects,
    getResident: getResident,
    addSyncObjects: addSyncObjects,
    updateSyncObject: updateSyncObject
  }
}]);

