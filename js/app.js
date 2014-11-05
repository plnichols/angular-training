angular.module('myApp', [])
	.controller('myFlickrFeed', function($scope, flickrService){

		$scope.images = {};
		$scope.searchTerm = 'cat';

		$scope.getFlickr = function() {
			flickrService.get($scope.searchTerm)
				.success(function(data){
					$scope.images = data.items;
				});
		}

		$scope.$watch('searchTerm', function() {
			$scope.getFlickr();
		});
	})

	
	.service('flickrService', function($http){
		var service = {
			get: function(term){
				return $http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne?tags='+term+'&tagmode=any&format=json&jsoncallback=JSON_CALLBACK');
			}
		}
		return service;
	})