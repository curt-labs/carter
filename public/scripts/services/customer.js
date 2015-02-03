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
	.factory('Customer', function ($resource, Session) {
		var base = 'http://goapi.curtmfg.com';
		return $resource(base + '/shopify/account/:id',{
			id: '@id'
		},{
			create: {
				method: 'POST',
				isArray: false,
				url: base + '/shopify/account',
				responseType: 'jsonp'
			},
			login:{
				method: 'POST',
				isArray: false,
				url: base +'/shopify/account/login',
				responseType: 'jsonp'
			},
			get:{
				method: 'GET',
				isArray: false,
				url: base + '/shopify/account',
				responseType: 'jsonp',
				headers:{
					'Authorization': 'Bearer ' + Session.getToken()
				}
			}
		});
	});
});
