define(['angular'], function (angular) {
    'use strict';

    /**
   * @ngdoc service
   * @name carter.Cart
   * @description
   * # Cart
   * Service in the carter.
   */
  angular.module('carter.services.Cart', ['ngStorage'])
    .service('Cart', function ($rootScope, $localStorage, CartEvents) {

        var cart = {
            items: [],
            user: {}
        };

        var $storage = $localStorage.$default({});
        if($storage.cart){
            cart = $storage.cart;
        }

        cart.addItem = function(prod, qty){
            // check if this item is already in the cart,
            // if it is, we'll increment the quantity
            // and GTFO
            for (var i = cart.items.length - 1; i >= 0; i--) {
                var item = cart.items[i];
                if (item.id === prod.id){
                    cart.items[i].quantity++;
                    $rootScope.$broadcast(CartEvents.quantityUpdated);
                    return;
                }
            }
            if(qty === undefined || qty === 0){
                qty = 1;
            }
            var item = {
                id: prod.id,
                brandID: prod.brandID,
                quantity: qty,
                product: prod
            };

            if (item.brandID === 1){
                item.name = 'CURT #'+item.id+' '+prod.short_description;
            }else if(item.brandID === 3){
                item.name = 'Aries #'+item.id+' '+prod.short_description;
            }else{
                item.name = '#'+item.id+' '+prod.short_description;
            }
            cart.items.push(item);
            $storage.cart = cart;
            $rootScope.$broadcast(CartEvents.itemAdded);
        };
        cart.removeItem = function(prod){
            var index = cart.items.indexOf(prod);
            if(index === -1){
                console.log('cant remove item thats not in the cart');
                return;
            }
            cart.items.splice(index,1);
            $storage.cart = cart;
            $rootScope.$broadcast(CartEvents.itemDeleted);
        };

        return cart;

    });
});
