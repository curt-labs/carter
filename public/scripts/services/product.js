define(['angular'], function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name carter.Product
     * @description
     * # Product
     * Factory in the carter.
     */
    angular.module('carter.services.Product', ['ngResource'])
        .factory('Product', function ($resource, API) {
            return $resource(API.domain + '/part/:id',{
                id: '@id'
            },{
                get:{
                    method: 'get',
                    isArray: false,
                    responseType:'json'
                }
            });
        });
});
