/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Service: Vehicle', function () {

		// load the service's module
		beforeEach(module('carter.services.Vehicle'));

		// instantiate service
		var Vehicle;
		beforeEach(inject(function (_Vehicle_) {
			Vehicle = _Vehicle_;
		}));

		it('should do something', function () {
			expect(!!Vehicle).toBe(true);
		});

	});
});
