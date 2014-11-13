angular.module('myApp', ['ngRoute', 'ngAnimate'])

	.config(function($routeProvider, $locationProvider) {

		// html5Mode gives you real URL with simple / structure
		//   - it allows your site to be indexable by Google without any more work needed
		//   - it doesn't work in IE8

		// without html5Mode, you need # URL
		//   - it works in IE8
		//   - site is not crawlable by default
		//   - you need to use hashbang URL (#!) to make Google crawl escaped fragment
		//   - that needs server side rendering of these pages
		$locationProvider.html5Mode(true);
		
		$routeProvider
			.when('/home', {
			templateUrl: 'home.html'
		})
		.when('/about', {
			templateUrl: 'about.html'
		})
		.when('/contact-us', {
			templateUrl: 'contact-us.html'
		});
	})

	.controller('routingController', function($scope){
		
	});