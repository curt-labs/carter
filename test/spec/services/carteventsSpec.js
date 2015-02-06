/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: CartEvents', function () {

    // load the service's module
    beforeEach(module('carter.services.CartEvents'));

    // instantiate service
    var CartEvents;
    beforeEach(inject(function (_CartEvents_) {
      CartEvents = _CartEvents_;
    }));

    it('should have item added', function () {
      expect(!!CartEvents.itemAdded).toBe(true);
    });
    it('should have item deleted', function () {
      expect(!!CartEvents.itemDeleted).toBe(true);
    });
    it('should have quantity updated', function () {
      expect(!!CartEvents.quantityUpdated).toBe(true);
    });

  });
});
