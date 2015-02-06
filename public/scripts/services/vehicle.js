define(['angular'], function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name carter.Vehicle
     * @description
     * # Vehicle
     * Factory in the carterApp.
     */
    angular.module('carter.services.Vehicle', ['ngResource', 'carter.services.API'])
        .factory('Vehicle', function ($resource, API) {
            return $resource(API.domain, {}, {
                save: {
                    method: 'POST',
                    url: API.domain + '/vehicle',
                    responseType: 'jsonp'
                }
            });
        });
});
