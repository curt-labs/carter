define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carter.controller:AddressesCtrl
   * @description
   * # AddressesCtrl
   * Controller of the carter
   */
  angular.module('carter.controllers.AddressesCtrl', [])
    .controller('AddressesCtrl', function ($scope, $rootScope, $location, Customer, API, AuthEvents) {
      Customer.get({'shop':API.shop}).$promise.then(function(data){
        $scope.customer = data;
      },function(){
        $rootScope.$broadcast(AuthEvents.notAuthorized);
        $location.path('/login');
      });
    });
});
