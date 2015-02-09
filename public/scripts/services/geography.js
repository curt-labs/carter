define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name carter.Geography
   * @description
   * # Geography
   * Service in the carter.
   */
  angular.module('carter.services.Geography', ['ngResource'])
	.service('Geography', function ($resource, API) {
	   return $resource(API.domain + '/geograhy',{},{
      countryStates: {
        method: 'get',
        isArray: true,
        url: API.domain + '/geography/countrystates',
        responseType: 'jsonp'
      }
     });
	});
});
