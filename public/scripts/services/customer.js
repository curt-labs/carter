define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name carter.Customer
	 * @description
	 * # Customer
	 * Service in the carter.
	 */
	angular.module('carter.services.Customer', ['ngResource'])
	.factory('Customer', function ($resource) {
		var base = 'http://goapi.curtmfg.com';
		return $resource(base + '/shopify/customers/:id',{
			id: '@id'
		},{
			create: {
				method: 'POST',
				isArray: false,
				url: base + '/shopify/customers',
				responseType: 'json'
			},
			login:{
				method: 'POST',
				isArray: false,
				url: base +'/shopify/customers/login',
				responseType: 'json'
			}
		});
	});
});
