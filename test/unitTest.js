describe("Unit Test: myPeople", function() {

	beforeEach(module('myApp'));

	var ctrl, scope;

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller('myPeople', {
			$scope: scope
		});
	}));

	it("should return a people object in the scope", function() {
		expect(scope.people).not.toBe(null);
	});

	it("should return a people object with 15 items", function() {
		expect(scope.people.length).toEqual(15);
	});
});