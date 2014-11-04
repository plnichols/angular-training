describe("Unit Test: myPeople", function() {

	beforeEach(module('myApp'));

	var ctrl, scope, httpBackend;

	beforeEach(inject(function($controller, $rootScope, $httpBackend) {
		scope = $rootScope.$new();
		httpBackend = $httpBackend;
    	controllerService = $controller;
	}));

	it("should return a people object in the scope", function() {
	    httpBackend.expectGET('ajax/people.json').respond([]);
	    ctrl = controllerService('myPeople', {$scope: scope});
	    httpBackend.flush();
	    expect(scope.people).toEqual([]);
	});
});