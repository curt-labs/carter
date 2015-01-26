/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Product', function () {

    // load the service's module
    beforeEach(module('carterApp.services.Product'));

    // instantiate service
    var Product;
    beforeEach(inject(function (_Product_) {
      Product = _Product_;
    }));

    it('should do something', function () {
      expect(!!Product).toBe(true);
    });

  });
});
