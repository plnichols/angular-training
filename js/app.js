angular.module('myApp')
	.directive('weatherDirective', function(){
		return {
			scope: true,
			templateUrl: 'template-profile.html',
			// calling controller here because otherwise, the directive doesn't have a person object
			// by calling the controller, we get a instance of myPerson with its scope
			controller: 'myPerson'
		};
	});