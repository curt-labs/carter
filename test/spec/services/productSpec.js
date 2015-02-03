/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Product', function () {

    // load the service's module
    beforeEach(module('carter.services.Product'));

    // instantiate service
    var Product;
    beforeEach(inject(function (_Product_) {
      Product = _Product_;
    }));


  });
});
