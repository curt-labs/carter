/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'services/category']/*deps*/, function (angular, MainCtrl, AboutCtrl, CategoryFactory)/*invoke*/ {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name ngRequirerApp
	 * @description
	 * # ngRequirerApp
	 *
	 * Main module of the application.
	 */
	return angular
		.module('ngRequirerApp', ['ngRequirerApp.controllers.MainCtrl',
'ngRequirerApp.controllers.AboutCtrl',
'ngRequirerApp.services.Category',
/*angJSDeps*/
		'ngCookies',
		'ngAria',
		'ngMessages',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'ngAnimate',
		'ngTouch'
	]).config(function ($routeProvider, $interpolateProvider) {
		$interpolateProvider.startSymbol('[[');
		$interpolateProvider.endSymbol(']]');
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
});
