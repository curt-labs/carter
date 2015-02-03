/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: LogoutCtrl', function () {

		// load the controller's module
		beforeEach(module('carter.controllers.LogoutCtrl'));

		var LogoutCtrl,
			scope;

		// Initialize the controller and a mock scope
		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			LogoutCtrl = $controller('LogoutCtrl', {
				$scope: scope
			});
		}));

		
	});
});
