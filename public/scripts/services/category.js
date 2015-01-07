define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name ngRequirerApp.Category
	 * @description
	 * # Category
	 * Factory in the ngRequirerApp.
	 */
	angular.module('ngRequirerApp.services.Category', ['ngResource'])
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
				}
			});
		});
});
