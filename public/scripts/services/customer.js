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
    .factory('Customer', function ($resource, Session, API) {
        return $resource(API.domain + '/shopify/account/:id',{
            id: '@id'
        },{
            create: {
                method: 'POST',
                isArray: false,
                url: API.domain + '/shopify/account',
                responseType: 'jsonp'
            },
            login:{
                method: 'POST',
                isArray: false,
                url: API.domain +'/shopify/account/login',
                responseType: 'jsonp'
            },
            get:{
                method: 'GET',
                isArray: false,
                url: API.domain + '/shopify/account',
                responseType: 'jsonp',
                headers:{
                    'Authorization': 'Bearer ' + Session.getToken()
                }
            },
            update:{
                method: 'PUT',
                isArray: false,
                url: API.domain + '/shopify/account',
                responseType: 'jsonp',
                headers:{
                    'Authorization': 'Bearer ' + Session.getToken()
                }
            }
        });
    });
});
