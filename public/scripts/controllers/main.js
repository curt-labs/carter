define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name carter.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the carter
	 */
	angular.module('carter.controllers.MainCtrl', [])
		.controller('MainCtrl', function ($rootScope, $scope) {
			$scope.categories = [];
			$rootScope.crumbs = [{
				path: '/',
				name:'Home'
			}];
			if($rootScope.parentCategories !== undefined){
				$scope.categories = $rootScope.parentCategories;
			}

			$scope.generateCategoryImage = function(cat){
				if(cat.image !== undefined){
					return cat.image.Scheme + '://' + cat.image.Host + cat.image.Path;
				}
				return '://';
			};
		});
});
