define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc directive
	 * @name carter.directive:compareTo
	 * @description
	 * # compareTo
	 */
	angular.module('carter.directives.CompareTo', [])
		.directive('compareTo', function () {
			return{
				require: 'ngModel',
				scope:{
					otherModelValue: '=compareTo'
				},
				link: function(scope, el, attr, ngModel){

					ngModel.$parsers.unshift(function(val){
						var valid = false;
						if(val){
							valid = val === scope.otherModelValue.$viewValue;
							ngModel.$setValidity('pwmatch',valid);
						}

						return valid ? val : undefined;
					});
				}
			};
		});
});
