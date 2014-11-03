angular.module('myApp', [])
	.controller('myPerson', function($scope){
		$scope.person = {};
		$scope.person.name = "Pierre";
		$scope.person.description = "This is my name and an image representing me!";
		$scope.person.image = "default-avatar";
	})
	.controller('myCalculator', function($scope){
		$scope.calc = {};
		$scope.calc.num1 = 1;
		$scope.calc.num2 = 2;

		$scope.resetCalculator = function(){
		$scope.calc.num1 = 0;
		$scope.calc.num2 = 0;
		}
	});