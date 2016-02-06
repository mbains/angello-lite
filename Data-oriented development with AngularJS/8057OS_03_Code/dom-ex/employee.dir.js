'use strict';

app.directive("myEmployee", function () {
  return {
    link: function (scope, element, attrs) {
      var name = scope.firstName + ' ' + attrs.lastname;
      element.text(name);
      $(element).effect('shake');
    }
  };
});