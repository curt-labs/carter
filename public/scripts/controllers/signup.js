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
		.controller('SignupCtrl', function ($scope, Customer) {
			$scope.errors = [];
			$scope.account = {
				first_name:'',
				last_name:'',
				email:'',
				password:''
			};

			$scope.signup = function(){
				$scope.accountForm.$submitted = true;
				if(!$scope.accountForm.$valid){
					return;
				}
				// We're going to double check the passwords
				// it was supposed to be checked in form validation,
				// but let's make sure.
				if($scope.account.password !== $scope.accountForm.confirm_password.$viewValue){
					return;
				}

				var c = {};
				c.first_name = $scope.account.first_name;
				c.last_name = $scope.account.last_name;
				c.email = $scope.account.email;
				c.password = $scope.account.password;
				Customer.create({'shop':'54b963688ff6c70001000001'},c).$promise.then(function(data){
					console.log(data);
				},function(){
					$scope.errors.push('Failed to create new customer.');
				});
			};
		});
});
