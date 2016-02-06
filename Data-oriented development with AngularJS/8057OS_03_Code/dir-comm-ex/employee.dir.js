'use strict';

app.directive("myEmployee", function () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    transclude: true,
    controller: function ($scope) {
      this.getName = function () {
        return $scope.name;
      };
    },
    template: '<div ng-transclude style="background-color:blueviolet">{{name}}</div>'
  };
});

app.directive("addresses", function () {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    template: '<div ng-transclude style="background-color:pink"></div>'
  };
});

app.directive("address", function () {
  return {
    require: '^myEmployee',
    restrict: 'E',
    scope: {
      type: '@'
    },
    transclude: true,
    link: function (scope, element, attrs, myEmployeeCtrl) {
      console.log(myEmployeeCtrl.getName() + ' ' + scope.type);
    },
    template: '<div ng-transclude style="background-color:powderblue"></div>'
  };
});