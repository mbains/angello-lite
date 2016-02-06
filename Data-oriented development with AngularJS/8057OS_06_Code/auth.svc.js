'use strict';

app.service('authSvc', ['FIREBASE_URI', '$firebaseAuth',
  function (FIREBASE_URI, $firebaseAuth) {

    var ref = new Firebase(FIREBASE_URI);
    var auth = $firebaseAuth(ref);

    var login = function () {
      return auth.$authAnonymously();
    };

    var logout = function () {
      return auth.$unauth();
    };

    return {
      login: login,
      logout: logout
    }
  }]);