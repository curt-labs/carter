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
        .factory('Category', function ($resource, API) {
            return $resource(API.domain + '/category/:id', {
                id: '@id'
            }, {
                parents: {
                    method: 'GET',
                    isArray: true,
                    url: API.domain + '/category',
                    responseType: 'jsonp'
                },
                get: {
                    method: 'GET',
                    isArray: false,
                    responseType: 'jsonp'
                }
            });
        });
});
