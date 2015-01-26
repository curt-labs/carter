/*jshint unused: vars */
define([
	'angular',
	'hammer',
	'controllers/main',
	'services/category',
	'controllers/category',
	'controllers/login',
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
	'services/session', 'controllers/product', 'services/product']/*deps*/,
	function (angular, MainCtrl, CategoryFactory, CategoryCtrl, LoginCtrl, LookupCtrl, VehicleFactory, IntegerSelectDirective, VehicleCtrl, CartCtrl, CartService, NgModelOnblurDirective, SignupCtrl, CompareToDirective, CustomerService, AuthEventsConstant, SessionService, ProductCtrl, ProductFactory)/*invoke*/ {
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
		'carter.controllers.LoginCtrl',
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
	]).config(function ($mdThemingProvider, $interpolateProvider, $locationProvider, $urlRouterProvider, $stateProvider, localStorageServiceProvider) {
		$interpolateProvider.startSymbol('[[');
		$interpolateProvider.endSymbol(']]');
		$locationProvider.html5Mode(true);
		localStorageServiceProvider.setPrefix('carter');

		var loginState = {
			templateUrl: '/views/login.html',
			controller: 'LoginCtrl'
		};
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
				'login':loginState,
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
				'login':loginState,
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
				'login':loginState,
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
				'login':loginState,
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
				'login':loginState,
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
				'login':loginState,
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
				'login':loginState,
				'lookup':lookupState,
				'cart':cartState
			}
		});
		$urlRouterProvider.otherwise('/');

		$mdThemingProvider.theme('default').primaryColor('grey').accentColor('deep-orange').warnColor('deep-orange');
	}).controller('AppController',['$rootScope', '$location','Category', '$mdSidenav',function($rootScope, $location, Category, $mdSidenav){
		$rootScope.parentCategories = Category.parents({'key':'9300f7bc-2ca6-11e4-8758-42010af0fd79'});

		$rootScope.goTo = function(path){
			$location.path(path);
		};

		$rootScope.toggleCart = function(){
			$mdSidenav('right').toggle();
		};
	}]);
});
