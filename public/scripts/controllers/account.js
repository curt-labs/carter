define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carter.controller:AccountCtrl
   * @description
   * # AccountCtrl
   * Controller of the carter
   */
  angular.module('carter.controllers.AccountCtrl', [])
    .controller('AccountCtrl', function ($rootScope, $scope, $location, Customer, API, AuthEvents) {
      $scope.customer = {};
      Customer.get({'shop':API.shop}).$promise.then(function(data){
        $scope.customer = data;
      },function(){
        $rootScope.$broadcast(AuthEvents.notAuthorized);
        $location.path('/login');
      });

      $scope.$watchCollection('customer',function(old, up){
        if(up.id === undefined){
          return;
        }

        Customer.update({'shop':API.shop}, $scope.customer).$promise.then(function(data){
          console.log('updated');
          console.log(data);
        },function(){
          console.log('Failed to update customer');
        });  
      });
    });
});
