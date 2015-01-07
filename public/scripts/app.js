/*jshint unused: vars */
define(['angular', 'hammer', 'controllers/main', 'services/category', 'controllers/category']/*deps*/, function (angular, MainCtrl, CategoryFactory, CategoryCtrl)/*invoke*/ {
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
	]).config(function ($interpolateProvider, $locationProvider, $urlRouterProvider, $stateProvider) {

		$interpolateProvider.startSymbol('[[');
		$interpolateProvider.endSymbol(']]');
		// $locationProvider.html5Mode(true);
		$stateProvider.state({
			name:'home',
			url: '/',
			views:{
				'body':{
					templateUrl:'/views/main.html',
					controller:'MainCtrl'
				}
			}
		});
		$stateProvider.state({
			name:'category',
			url: '/category/:id',
			views:{
				'body':{
					templateUrl:'/views/category.html',
					controller:'CategoryCtrl'
				}
			}
		});
		$urlRouterProvider.otherwise('/');
	}).controller('AppController',['$rootScope','Category',function($rootScope, Category){
		$rootScope.parentCategories = Category.parents({'key':'9300f7bc-2ca6-11e4-8758-42010af0fd79'});
	}]);
});
