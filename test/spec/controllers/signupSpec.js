/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: SignupCtrl', function () {

		// load the controller's module
		beforeEach(module('carter.controllers.SignupCtrl'));

		var SignupCtrl,
			scope;

		// Initialize the controller and a mock scope
		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			SignupCtrl = $controller('SignupCtrl', {
				$scope: scope
			});
		}));

		it('should have scope defined', function () {
			expect(scope).toBeDefined();
		});
	});
});
