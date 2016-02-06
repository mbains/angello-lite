'use strict';

app.directive("myEmployee", function () {
  return {
    scope: {
      firstName: '@',
      lastName: '@'
    },
    templateUrl: 'employee.tpl.html'
  };
});