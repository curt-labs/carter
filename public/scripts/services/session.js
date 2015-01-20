define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name carter.Session
	 * @description
	 * # Session
	 * Service in the carter.
	 */
	angular.module('carter.services.Session', ['LocalStorageModule'])
	.service('Session', function (localStorageService) {

		this.storeCustomer = function(cust){
			localStorageService.set('customer', cust);
		};
		this.getCustomer = function(){
			return localStorageService.get('customer');
		};
		this.destroyCustoemr = function(){
			localStorageService.delete('customer');
		};

		return this;
	});
});
