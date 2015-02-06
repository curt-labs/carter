define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name carterApp.carter:AppCtrl
   * @description
   * # AppCtrl
   * Controller of the carter
   */
  angular.module('carter.controllers.AppCtrl', [])
    .controller('AppCtrl', function ($rootScope, $location, Category, $mdSidenav, $mdToast, $animate, AuthEvents, CartEvents, API, Cart) {
        $rootScope.parentCategories = Category.parents({'key':API.key});

        $rootScope.goTo = function(path){
            $location.path(path);
        };

        $rootScope.toggleCart = function(){
            $mdSidenav('right').toggle();
        };

        $rootScope.addToCart = function(part){
                Cart.addItem(part);
                return false;
            };

        $rootScope.$on(AuthEvents.logoutSuccess,function(){
          $mdToast.show($mdToast.simple().content('Logout Success!').position('bottom right').hideDelay(3000));
        });
        $rootScope.$on(AuthEvents.loginSuccess, function(){
          $mdToast.show($mdToast.simple().content('Login Success!').position('bottom right').hideDelay(3000));
        });
        $rootScope.$on(AuthEvents.loginFailed,function(){
          $mdToast.show($mdToast.simple().content('Login Failed').position('bottom right').hideDelay(3000));
        });
        $rootScope.$on(AuthEvents.sessionTimeout,function(){

        });
        $rootScope.$on(AuthEvents.notAuthenticated,function(){

        });
        $rootScope.$on(AuthEvents.notAuthorized,function(){
          $mdToast.show($mdToast.simple().content('Must login first').position('bottom right').hideDelay(3000));
        });
        $rootScope.$on(CartEvents.itemAdded, function(){
          $mdToast.show($mdToast.simple().content('Item added').position('bottom right').hideDelay(3000));
        });
        $rootScope.$on(CartEvents.itemDeleted, function(){
          $mdToast.show($mdToast.simple().content('Item removed').position('bottom right').hideDelay(3000));
        });
        $rootScope.$on(CartEvents.quantityUpdated, function(){
          $mdToast.show($mdToast.simple().content('Quantity updated').position('bottom right').hideDelay(3000));
        });
    });
});
