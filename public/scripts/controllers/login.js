define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name carter.controller:LoginCtrl
	 * @description
	 * # LoginCtrl
	 * Controller of the carterApp
	 */
	angular.module('carter.controllers.LoginCtrl', [])
		.controller('LoginCtrl', function ($scope) {
			$scope.authentication = {
				email: '',
				password: ''
			};
		});
});
