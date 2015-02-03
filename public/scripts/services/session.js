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

		this.storeToken = function(token){
			localStorageService.set('token', token);
		};
		this.getToken = function(){
			return localStorageService.get('token');
		};
		this.destroyToken = function(){
			localStorageService.remove('token');
		};

		return this;
	});
});
