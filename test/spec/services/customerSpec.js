/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Service: Customer', function () {

		// load the service's module
		beforeEach(module('carter.services.Customer'));

		// instantiate service
		var Customer;
		beforeEach(inject(function (_Customer_) {
			Customer = _Customer_;
		}));

		it('should do something', function () {
			expect(!!Customer).toBe(true);
		});

	});
});
