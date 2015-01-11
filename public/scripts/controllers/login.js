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
			$scope.vehicle = {};

			$scope.$watchCollection('vehicle',function(newValue, oldValue){
				console.log(newValue);
				console.log(oldValue);
			});

			$scope.updateVehicle = function(r){
				console.log(r);
			};
			console.log($scope);
		});
});
