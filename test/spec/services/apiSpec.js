/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: API', function () {

    // load the service's module
    beforeEach(module('carter.services.API'));

    // instantiate service
    var API;
    beforeEach(inject(function (_API_) {
      API = _API_;
    }));

    it('should have a domain', function () {
      expect(!!API.domain).toBe(true);
    });
    it('should have a shop identifier', function () {
      expect(!!API.shop).toBe(true);
    });
    it('should have a key', function () {
      expect(!!API.key).toBe(true);
    });


  });
});
