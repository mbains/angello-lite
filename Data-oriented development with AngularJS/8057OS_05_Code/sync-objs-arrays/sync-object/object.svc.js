'use strict';

app.factory('syncObjectSvc', ['FIREBASE_URI', '$firebaseArray', '$firebaseObject',
  function (FIREBASE_URI, $firebaseArray, $firebaseObject) {
    var ref = new Firebase(FIREBASE_URI);
    var syncObjects = $firebaseArray(ref.child('objects'));

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
      var resident = $firebaseObject(ref.child('objects').child(id));

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

