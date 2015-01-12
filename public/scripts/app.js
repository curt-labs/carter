/*jshint unused: vars */
define(['angular', 'hammer', 'controllers/main', 'services/category', 'controllers/category', 'controllers/login', 'controllers/lookup', 'services/vehicle', 'directives/integerselect', 'controllers/vehicle']/*deps*/, function (angular, MainCtrl, CategoryFactory, CategoryCtrl, LoginCtrl, LookupCtrl, VehicleFactory, IntegerSelectDirective, VehicleCtrl)/*invoke*/ {
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
	]).config(function ($mdThemingProvider, $interpolateProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
		$interpolateProvider.startSymbol('[[');
		$interpolateProvider.endSymbol(']]');
		$locationProvider.html5Mode(true);

		var loginState = {
			templateUrl: '/views/login.html',
			controller: 'LoginCtrl'
		};
		var lookupState = {
			templateUrl: '/views/lookup.html',
			controller: 'LookupCtrl'
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
				'lookup':lookupState
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
				'lookup':lookupState
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
				'lookup':lookupState
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
				'lookup':lookupState
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
				'lookup':lookupState
			}
		});
		$urlRouterProvider.otherwise('/');

		$mdThemingProvider.theme('default').primaryColor('grey').accentColor('deep-orange').warnColor('deep-orange');
	}).controller('AppController',['$rootScope', '$location','Category',function($rootScope, $location, Category){
		$rootScope.parentCategories = Category.parents({'key':'9300f7bc-2ca6-11e4-8758-42010af0fd79'});

		$rootScope.goTo = function(path){
			$location.path(path);
		};
	}]);
});
