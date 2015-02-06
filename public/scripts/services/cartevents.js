define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name carter.CartEvents
   * @description
   * # CartEvents
   * Constant in carter.
   */
  angular.module('carter.services.CartEvents', [])
  .constant('CartEvents', {
    itemAdded: 'cart-item-added',
    itemDeleted: 'cart-item-deleted',
    quantityUpdated: 'cart-quantity-updated'
  });
});
