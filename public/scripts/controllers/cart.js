define(['angular'], function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name carter.controller:CartCtrl
     * @description
     * # CartCtrl
     * Controller of the carter
     */
    angular.module('carter.controllers.CartCtrl', [])
        .controller('CartCtrl', function ($scope, $rootScope, AuthEvents, API, $http, Session, Cart, Customer, $mdDialog, CartEvents) {
            $scope.cart = Cart;
            $scope.auth = {
                email: '',
                password: ''
            };

            Customer.get({'shop':API.shop}).$promise.then(function(data){
                $scope.customer = data;
            },function(){
                $rootScope.$broadcast(AuthEvents.notAuthenticated);
            });

            $scope.generatePartImage = function(part){
                if(part.images === undefined){
                    return '://';
                }

                var img = {};
                for (var i = 0; i < part.images.length; i++) {
                    img = part.images[i];
                    if(img.size.toLowerCase() === 'medio' && img.sort === 'a'){
                        return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                    }
                }
                for (i = 0; i < part.images.length; i++) {
                    img = part.images[i];
                    if(img.size.toLowerCase() === 'medio'){
                        return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                    }
                }
                for (i = 0; i < part.images.length; i++) {
                    img = part.images[i];
                    if(img.sort === 'a'){
                        return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                    }
                }

                if(part.images[0] !== undefined){
                    img = part.images[0];
                    return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                }
            };
            $scope.removeItem = function(item){
                var confirm = $mdDialog.confirm()
                    .title('Remove '+item.name+'?')
                    .ariaLabel('Remove Item')
                    .ok('Yes')
                    .cancel('Cancel');
                $mdDialog.show(confirm).then(function() {
                    Cart.removeItem(item);
                });
            };
            $scope.updateQuantity = function(item){
                if(item.quantity === 0){
                    $scope.removeItem(item);
                    return;
                }
                $rootScope.$broadcast(CartEvents.quantityUpdated);
            };
            $scope.login = function(){
                Customer.login({'shop':API.shop},$scope.auth).$promise.then(function(data){
                    $rootScope.$broadcast(AuthEvents.loginSuccess);
                    Session.storeToken(data.token);
                    $scope.customer = data;
                },function(){
                    $rootScope.$broadcast(AuthEvents.loginFailed);
                });
            };
        });
});
