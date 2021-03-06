/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('carter.controllers.MainCtrl'));

    var MainCtrl,
      rootScope,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      rootScope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope,
        $rootScope: rootScope
      });
    }));

  });
});
