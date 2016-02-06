'use strict';

app.directive("myEmployee", function () {
  return {
    restrict: 'E',
    scope: {
      employee: '=info'
    },
    templateUrl: 'employee.tpl.html'
  };
});
