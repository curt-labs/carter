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
					ngModel.$validators.compareTo = function(modelValue){
						ngModel.$setValidity('pwmatch',modelValue === scope.otherModelValue.$viewValue);
					};

					scope.$watch('otherModelValue',function(){
						ngModel.$validate();
					});
				}
			};
		});
});
