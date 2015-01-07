define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name carter.Category
	 * @description
	 * # Category
	 * Factory in the carter.
	 */
	angular.module('carter.services.Category', ['ngResource'])
		.factory('Category', function ($resource) {
			var base = 'http://goapi.curtmfg.com';
			return $resource(base + '/category/:id', {
				id: '@id'
			}, {
				parents: {
					method: 'GET',
					isArray: true,
					url: base + '/category',
					responseType: 'json'
				},
				get: {
					method: 'GET',
					isArray: false,
					responseType: 'json'
				}
			});
		});
});
