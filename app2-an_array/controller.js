angular.module("arrayApp").controller("arrayController", function($scope, mainSvc) {

$scope.employees = mainSvc.getData();

});