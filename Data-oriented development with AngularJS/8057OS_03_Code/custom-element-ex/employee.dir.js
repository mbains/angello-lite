'use strict';

app.directive("myEmployee", function () {
  return {
    restrict: 'E',
    templateUrl: 'employee.tpl.html'
  };
});
