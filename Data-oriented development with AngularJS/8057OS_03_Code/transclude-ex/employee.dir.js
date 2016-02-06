'use strict';

app.directive("myEmployee", function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      employee: '=info'
    },
    templateUrl: 'employee.tpl.html'
  };
});
