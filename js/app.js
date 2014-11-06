angular.module('myApp', [])

	.controller('articlesController', function($scope, articlesService){
		$scope.article = {};
		$scope.articles = [];

		articlesService.index().success(function(data){
			$scope.articles = data;
		});

		$scope.getSingleArticle = function(){
			articlesService.show($scope.show_article_num).success(function(data){
				$scope.articles = [];
				$scope.articles.push(data);
			});
		}

		$scope.createArticle = function(){
			articlesService.create($scope.article);
		}

		$scope.destroyArticle = function(id){
			articlesService.destroy(id);
		}
	})
	
	.directive('articlesDirective', function(){
		return {
			scope: true,
			templateUrl: 'article.html'
		};
	})
	
	.service('articlesService', function($http){
		var api_url = 'http://simple-api.herokuapp.com/api/v1/articles/';
	    var service = {
	      index: function() {
	        return $http.get(api_url);
	      },
	      show: function(id) {
	        return $http.get(api_url + id);
	      },
	      create: function(article) {
	        return $http.post(api_url + '?title=' + article.title + '&intro=' + article.intro + '&content=' + article.content + '&author_id=' + article.authorid);	      	
	      },
	      destroy: function(id) {
	        return $http.get(api_url + id + '/destroy');	      	
	      }
	    }
		return service;
	});