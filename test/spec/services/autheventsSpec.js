/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Service: AuthEvents', function () {

		// load the service's module
		beforeEach(module('carter.services.AuthEvents'));

		// instantiate service
		var AuthEvents;
		beforeEach(inject(function (_AuthEvents_) {
			AuthEvents = _AuthEvents_;
		}));

		it('should do something', function () {
			expect(!!AuthEvents).toBe(true);
		});

	});
});
