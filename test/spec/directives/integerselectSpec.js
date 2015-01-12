/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
	'use strict';

	describe('Directive: integerSelect', function () {

		// load the directive's module
		beforeEach(module('carter.directives.IntegerSelect'));

		var element,
			scope;

		beforeEach(inject(function ($rootScope) {
			scope = $rootScope.$new();
		}));

		it('should make hidden element visible', inject(function ($compile) {
			element = angular.element('<integer-select></integer-select>');
			element = $compile(element)(scope);
			expect(element.text()).toBe('this is the integerSelect directive');
		}));
	});
});
