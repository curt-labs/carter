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
    .controller('AccountCtrl', function ($scope, $location, Customer) {
      $scope.customer = {};
      Customer.get({'shop':'54b963688ff6c70001000001'}).$promise.then(function(data){
        $scope.customer = data;
      },function(){
        $location.path('/login');
      });
    });
});
