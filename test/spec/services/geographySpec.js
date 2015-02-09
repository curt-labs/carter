/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Geography', function () {

    // load the service's module
    beforeEach(module('carter.services.Geography'));

    // instantiate service
    var Geography;
    beforeEach(inject(function (_Geography_) {
      Geography = _Geography_;
    }));


  });
});
