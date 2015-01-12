define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name carterApp.directive:integerSelect
	 * @description
	 * # integerSelect
	 */
	angular.module('carter.directives.IntegerSelect', [])
		.directive('integer', function () {
			return {
				require:'ngModel',
				link: function(scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function(viewValue){
						return parseInt(viewValue, 0);
					});
				}
			};
		});
});
