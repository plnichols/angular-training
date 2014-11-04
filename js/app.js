angular.module('myApp', [])
	.controller('myTabs', function($scope){
		
		$scope.tab = {};

		$scope.switchTabs = function(arg){
			$scope.tab.name = arg;
		}

	});