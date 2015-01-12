define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name carter.Vehicle
	 * @description
	 * # Vehicle
	 * Factory in the carterApp.
	 */
	angular.module('carter.services.Vehicle', ['ngResource'])
		.factory('Vehicle', function ($resource) {
			var base = 'http://goapi.curtmfg.com';
			return $resource(base, {}, {
				save: {
					method: 'POST',
					url: base + '/vehicle',
					responseType: 'json'
				}
			});
		});
});
