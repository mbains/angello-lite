'use strict';

app.factory("authSvc", ['$firebaseAuth', 'FIREBASE_URI', function($firebaseAuth, FIREBASE_URI) {
    // create a reference to the main URL
    var ref = new Firebase(FIREBASE_URI);
    return $firebaseAuth(ref);
}]);
