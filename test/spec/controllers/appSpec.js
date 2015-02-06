/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: AppCtrl', function () {

    // load the controller's module
    beforeEach(module('carter.controllers.AppCtrl'));

    var AppCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      AppCtrl = $controller('AppCtrl', {
        $scope: scope
      });
    }));

    
  });
});
