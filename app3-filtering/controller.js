angular.module("filterApp").controller("mainCtrl", function($scope, mainSvc) {

$scope.ctrlTest = "Ctrl is wrking";
$scope.svcTest = mainSvc.svcTest;

$scope.getData = mainSvc.getData();

});