/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: EditAddressCtrl', function () {

    // load the controller's module
    beforeEach(module('carter.controllers.EditAddressCtrl'));

    var EditAddressCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      EditAddressCtrl = $controller('EditAddressCtrl', {
        $scope: scope
      });
    }));

  });
});
