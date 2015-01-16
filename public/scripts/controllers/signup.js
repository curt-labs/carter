define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name carter.controller:SignupCtrl
	 * @description
	 * # SignupCtrl
	 * Controller of the carter
	 */
	angular.module('carter.controllers.SignupCtrl', [])
		.controller('SignupCtrl', function ($scope) {
			$scope.account = {
				first_name:'',
				last_name:'',
				email:'',
				password:''
			};
			$scope.confirm_password = '';

			$scope.signup = function(){
				if(!$scope.accountForm.$valid){
					return;
				}
				console.log('hit it');
			};
		});
});
