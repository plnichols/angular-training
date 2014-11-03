angular.module('myApp', ['ngDialog'])
	.controller('myPerson', ['$scope', 'ngDialog', function($scope, ngDialog){
		$scope.person = {};
		$scope.person.description = "This is my name and an image representing me!";
		$scope.person.image = "default-avatar";

		ngDialog.open({
			template: '<p>my template</p>',
			className: 'ngdialog-theme-plain',
			plain: true
		});
	}]);