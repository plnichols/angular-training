angular.module('myApp', [])
	.controller('myReddit', function($scope){
		$scope.reddit = [
						  {
						    comment: "I really like cheese",
						    votes: 10
						  },
						  {
						    comment: "I'm not so sure about edam though",
						    votes: 2
						  },
						  {
						    comment: "Gouda properly rocks!",
						    votes: 4
						  },
						  {
						    comment: "I quite like a bit of mild cheddar",
						    votes: 19
						  },
						  {
						    comment: "Cheese is just old milk",
						    votes: 8
						  }
						];
	})
	.filter('minVote', function(){
		var filter = function(array, number) {
			return array.filter(function(arrayItem){
				return arrayItem.votes >= number;
			});
		}
		return filter;
	})