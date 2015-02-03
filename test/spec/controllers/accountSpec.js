/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: AccountCtrl', function () {

    // load the controller's module
    beforeEach(module('carter.controllers.AccountCtrl'));

    var AccountCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      AccountCtrl = $controller('AccountCtrl', {
        $scope: scope
      });
    }));

  });
});
