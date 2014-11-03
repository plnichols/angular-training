angular.module('myApp', [])
	.controller('myPerson', function($scope){
		$scope.person = {};
		$scope.person.description = "This is my name and an image representing me!";
		$scope.person.image = "default-avatar";
	});