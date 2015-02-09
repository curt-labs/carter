define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carter.controller:EditAddressCtrl
   * @description
   * # EditAddressCtrl
   * Controller of the carter
   */
  angular.module('carter.controllers.EditAddressCtrl', [])
    .controller('EditAddressCtrl', function ($scope, $stateParams, $rootScope, $location, Customer, API, AuthEvents, Geography) {
      $scope.address = {};
      $scope.provinces = [];
      Customer.get({'shop':API.shop}).$promise.then(function(data){
        $scope.customer = data;
        angular.forEach($scope.customer.address, function(addr){
          if(addr.id === $stateParams.id){
            $scope.address = addr;
          }
        });
      },function(){
        $rootScope.$broadcast(AuthEvents.notAuthorized);
        $location.path('/login');
      });

      Geography.countryStates({'key':API.key}).$promise.then(function(data){
        for (var i = data.length - 1; i >= 0; i--) {
          var country = data[i];
          for (var j = country.states.length - 1; j >= 0; j--) {
            $scope.provinces.push(country.states[j]);
          }
        }
      });

      $scope.saveAddress = function(){
        $scope.errors = [];
        if($scope.addressForm.$error.required){
          $scope.errors.push('Some required fields are missing');
          return;
        }

        if($scope.address.id === undefined){
          Customer.createAddress({'shop':API.shop},$scope.address);
        }else{
          Customer.saveAddress({'shop':API.shop},$scope.address);
        }
        
      };

      
    });
});
