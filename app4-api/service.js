angular.module("apiApp").service("mainSvc", function($http) {

var baseUrl = "http://anapioficeandfire.com/api/";

this.getData = function() {

	var baseUrl = "http://swapi.co/api/"
	return $http({
		method: 'GET',
		url: baseUrl + "people",
	}).then(function(response) {
		if (response.status === 200) {
			return response.data.results;
		} else {
			console.log(response.error);
			return "Main character killed off again.";
		}
	})

}

})