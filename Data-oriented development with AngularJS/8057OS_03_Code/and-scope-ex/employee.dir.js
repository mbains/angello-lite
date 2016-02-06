'use strict';

app.directive("myEmployee", function () {
  return {
    restrict: 'E',
    scope : {
      'click': '&onClick'
    },
    templateUrl: 'employee.tpl.html'
  };
});
