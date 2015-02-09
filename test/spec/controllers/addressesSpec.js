/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: AddressesCtrl', function () {

    // load the controller's module
    beforeEach(module('carter.controllers.AddressesCtrl'));

    var AddressesCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      AddressesCtrl = $controller('AddressesCtrl', {
        $scope: scope
      });
    }));

    
  });
});
