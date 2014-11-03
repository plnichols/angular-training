angular.module('myApp', ['ngDialog'])
	.controller('myPerson', ['$scope', 'ngDialog', function($scope, ngDialog){
		$scope.person = {};
		$scope.person.name = "Name";
		$scope.person.description = "This is my name and an image representing me!";
		$scope.person.image = "default-avatar";

		$scope.openDialog = function(){
			ngDialog.open({
				template: '<p>my template</p>',
				plain: true
			});
		}
	}]);