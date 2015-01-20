define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name carter.controller:LoginCtrl
	 * @description
	 * # LoginCtrl
	 * Controller of the carter
	 */
	angular.module('carter.controllers.LoginCtrl', [])
		.controller('LoginCtrl', function ($scope, $rootScope, AuthEvents, Customer, Session) {
			$scope.auth = {
				email: '',
				password: ''
			};

			$scope.customer = Session.getCustomer();

			$scope.login = function(){
				Customer.login({'shop':'54b963688ff6c70001000001'},$scope.auth).$promise.then(function(data){
					$rootScope.$broadcast(AuthEvents.loginSuccess);
					Session.storeCustomer(data);
				},function(){
					$rootScope.$broadcast(AuthEvents.loginFailed);
				});
			};
		});
});
