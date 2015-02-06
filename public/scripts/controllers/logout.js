define(['angular'], function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name carter.controller:LogoutCtrl
     * @description
     * # LogoutCtrl
     * Controller of the carter
     */
    angular.module('carter.controllers.LogoutCtrl', [])
        .controller('LogoutCtrl', function ($rootScope, $location, Session, AuthEvents) {
            Session.destroyToken();
            $location.path('/');
            $rootScope.$broadcast(AuthEvents.logoutSuccess);
        });
});
