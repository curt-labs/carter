/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Controller: VehicleCtrl', function () {

		// load the controller's module
		beforeEach(module('carter.controllers.VehicleCtrl'));

		var VehicleCtrl,
			scope;

		// Initialize the controller and a mock scope
		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			VehicleCtrl = $controller('VehicleCtrl', {
				$scope: scope
			});
		}));

	});
});
