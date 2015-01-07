define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name ngRequirerApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the ngRequirerApp
	 */
	angular.module('ngRequirerApp.controllers.MainCtrl', ['ngRequirerApp.services.Category'])
		.controller('MainCtrl', function ($scope, $rootScope, Category) {
			$rootScope.parentCategories = Category.parents({'key':'9300f7bc-2ca6-11e4-8758-42010af0fd79'});
		});
});
