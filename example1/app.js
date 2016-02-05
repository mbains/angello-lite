
var mymod = angular.module('myApp', []);

mymod.factory('customService', function() {
   
    window.foo = {foo:42};
    return window.foo;
});
        
mymod.controller('GreetingController', function($scope){
    var view = this;
    $scope.now = new Date();
    $scope.greeting = 'Hi';
    this.data = "extra data";
}).controller('ControllerWithDependency', function($scope, customService) {
    
    this.foo = customService.foo;
    this.getNewFoo = function() {
        this.foo = window.foo;
    };
    console.log(customService.foo);
});