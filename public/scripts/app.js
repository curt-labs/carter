/*jshint unused: vars */
define([
    'angular',
    'controllers/main',
    'services/category',
    'controllers/category',
    'controllers/lookup',
    'services/vehicle',
    'directives/integerselect',
    'controllers/vehicle',
    'controllers/cart',
    'services/cart',
    'directives/ngmodelonblur',
    'controllers/signup',
    'directives/compareto',
    'services/customer',
    'services/authevents',
    'services/session', 'controllers/product', 'services/product', 'controllers/logout', 'controllers/account', 'controllers/app', 'services/cartevents', 'services/api']/*deps*/,
    function (angular, MainCtrl, CategoryFactory, CategoryCtrl, LookupCtrl, VehicleFactory, IntegerSelectDirective, VehicleCtrl, CartCtrl, CartService, NgModelOnblurDirective, SignupCtrl, CompareToDirective, CustomerService, AuthEventsConstant, SessionService, ProductCtrl, ProductFactory, LogoutCtrl, AccountCtrl, AppCtrl, CartEventsConstant, APIConstant)/*invoke*/ {
    'use strict';

    /**
     * @ngdoc overview
     * @name carter
     * @description
     * # carter
     *
     * Main module of the application.
     */
    return angular
        .module('carter', ['carter.controllers.MainCtrl',
        'carter.services.Category',
        'carter.controllers.CategoryCtrl',
        'carter.controllers.LookupCtrl',
        'carter.services.Vehicle',
        'carter.directives.IntegerSelect',
        'carter.controllers.VehicleCtrl',
        'carter.controllers.CartCtrl',
        'carter.services.Cart',
        'carter.directives.NgModelOnblur',
        'carter.controllers.SignupCtrl',
        'carter.directives.CompareTo',
        'carter.services.Customer',
        'carter.services.AuthEvents',
        'carter.services.Session',
        'carter.controllers.ProductCtrl',
        'carter.services.Product',
        'carter.controllers.LogoutCtrl',
        'carter.controllers.AccountCtrl',
        'carter.controllers.AppCtrl',
        'carter.services.CartEvents',
        'carter.services.API',
/*angJSDeps*/
        'ngCookies',
        'ngAria',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'ngTouch',
        'ui.router',
        'ngMaterial'
    ]).config(function ($mdThemingProvider, $httpProvider, $interpolateProvider, $locationProvider, $urlRouterProvider, $stateProvider, localStorageServiceProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
        $locationProvider.html5Mode(true);
        localStorageServiceProvider.setPrefix('carter');
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common.Accept = 'application/json';
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';

        var lookupState = {
            templateUrl: '/views/lookup.html',
            controller: 'LookupCtrl'
        };
        var cartState = {
            templateUrl: '/views/cart.html',
            controller: 'CartCtrl'
        };
        $stateProvider.state({
            name:'home',
            url: '/',
            views:{
                'body':{
                    templateUrl:'/views/main.html',
                    controller:'MainCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name:'category',
            url: '/category/:id',
            views:{
                'body':{
                    templateUrl:'/views/category.html',
                    controller:'CategoryCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name:'product',
            url: '/product/:id',
            views:{
                'body':{
                    templateUrl:'/views/product.html',
                    controller:'ProductCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name:'vehicleBase',
            url: '/vehicle/{year:int}/:make/:model',
            views:{
                'body':{
                    templateUrl:'/views/vehicle.html',
                    controller:'VehicleCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name:'vehicleSubmodel',
            url: '/vehicle/{year:int}/:make/:model/:submodel',
            views:{
                'body':{
                    templateUrl:'/views/vehicle.html',
                    controller:'VehicleCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name:'vehicleConfigs',
            url: '/vehicle/{year:int}/:make/:model/:submodel/{config:.*}',
            views:{
                'body':{
                    templateUrl:'/views/vehicle.html',
                    controller:'VehicleCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name:'CreateAccount',
            url: '/account/new',
            views:{
                'body':{
                    templateUrl:'/views/account/new.html',
                    controller:'SignupCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name: 'Logout',
            url: '/logout',
            views:{
                'body':{
                    templateUrl:'/views/main.html',
                    controller:'LogoutCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $stateProvider.state({
            name: 'Account Home',
            url: '/account',
            views:{
                'body':{
                    templateUrl:'/views/account/main.html',
                    controller:'AccountCtrl'
                },
                'lookup':lookupState,
                'cart':cartState
            }
        });
        $urlRouterProvider.otherwise('/');

        $mdThemingProvider.theme('default').primaryPalette('grey').accentPalette('deep-orange').warnPalette('deep-orange');
    });
});
