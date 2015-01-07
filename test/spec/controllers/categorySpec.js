/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: CategoryCtrl', function () {

		// load the controller's module
		beforeEach(module('carter.controllers.CategoryCtrl'));

		var CategoryCtrlCtrl,
			scope;

		// Initialize the controller and a mock scope
		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			CategoryCtrlCtrl = $controller('CategoryCtrl', {
				$scope: scope
			});
		}));

	});
});
