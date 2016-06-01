// alert('working');
var authorControllers = angular.module('myApp',[]);

authorControllers.controller('ListController',function MyController($scope,$http) {
 $http.get('js/data.json').success(function(data){
  $scope.author = data;
  $scope.authorOrder ='name';
 });
});