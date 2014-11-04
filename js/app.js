angular.module('myApp', [])
	.controller('myPeople', function($scope, $http){
		$scope.people = {};
		
		$http.get('ajax/people.json')
			.success(function(data){
				$scope.people = data;
			})
	});