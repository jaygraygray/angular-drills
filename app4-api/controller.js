angular.module("apiApp").controller("mainCtrl", function($scope, mainSvc) {

mainSvc.getData().then(function(characters) {
	$scope.myList = characters;
	console.log($scope.myList);
});


})