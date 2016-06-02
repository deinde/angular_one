//seperated controller called 'authorControllers' dedicated to request and response of data from external json file using a XMLhttp service object called '$http' which uses 'get' method and sets '$scope' object to response data. First the var 'authorsControllers' is set to an angular module which posseses the 'controller' method. Second the controller method is called on the authorControllers object. The controller is named 'ListController' and a call back function is passed $scope and $http objects. The $http object's get method is called and passed the url of the external json file. If the request is successful, then call an anonymous call back function and pass in the returned request data as 'data' argument and set to $scope.authors.(optional) Set the starting value of authorOrder to 'name' value for input value  

var authorControllers = angular.module('authorControllers', []);

authorControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.authors = data;
    $scope.authorOrder = 'name';
  });
}]);

authorControllers.controller('DetailsController', ['$scope', '$http','routeParams', function($scope, $http,$routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.authors = data;
    $scope.WhichItem = $routeParams.itemId;
  });
}]);


















