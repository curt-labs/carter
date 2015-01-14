define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name carter.controller:CartCtrl
	 * @description
	 * # CartCtrl
	 * Controller of the carter
	 */
	angular.module('carter.controllers.CartCtrl', [])
		.controller('CartCtrl', function ($scope) {
			$scope.cart = {};

		});
});
