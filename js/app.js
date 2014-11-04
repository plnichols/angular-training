angular.module('myApp', [])
	.controller('myFlickrFeed', function($scope, $http){

		$scope.searchTerm = 'cat';
		$scope.images = {};

		$scope.getJsonp = function(){
			$http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne?tags=' + $scope.searchTerm + '&tagmode=any&format=json&jsoncallback=JSON_CALLBACK')
				.success(function(data){
					$scope.images = data.items;
				});
		}

		$scope.$watch('searchTerm', function() {
			$scope.getJsonp();
		});
	});