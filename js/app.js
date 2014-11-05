angular.module('myApp', ['ngDialog'])
	.controller('myPerson', ['$scope', 'ngDialog', function($scope){
		$scope.person = {};
		$scope.person.description = "This is my name and an image representing me!";
		$scope.person.image = "default-avatar";
	}])
	.directive('profileDirective', function(){
		return {
			scope: true,
			templateUrl: 'template-profile.html',
			// calling controller here because otherwise, the directive doesn't have a person object
			// by calling the controller, we get a instance of myPerson with its scope
			controller: 'myPerson'
		};
	});