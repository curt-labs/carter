define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name ngRequirerApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the ngRequirerApp
   */
  angular.module('ngRequirerApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
