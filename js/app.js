//Register Application to index.html
var myApp = angular.module('myApp', [
  'ngRoute',
  'authorControllers'
]);
// Adding routes and corresponding templates and controllers to ng-view on index.html page
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);