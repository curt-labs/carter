/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: LookupCtrl', function () {

		// load the controller's module
		beforeEach(module('carter.controllers.LookupCtrl'));

		var LookupCtrl,
			scope;

		// Initialize the controller and a mock scope
		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			LookupCtrl = $controller('LookupCtrl', {
				$scope: scope
			});
		}));

	});
});
