/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: ProductCtrl', function () {

		// load the controller's module
		beforeEach(module('carter.controllers.ProductCtrl'));

		var ProductCtrl,
			scope;

		// Initialize the controller and a mock scope
		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			ProductCtrl = $controller('ProductCtrl', {
				$scope: scope
			});
		}));
	});
});
