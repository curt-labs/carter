/*jshint unused: vars */
require.config({
	paths: {
		angular: '../vendor/angular/angular',
		'angular-animate': '../vendor/angular-animate/angular-animate',
		'angular-aria': '../vendor/angular-aria/angular-aria',
		'angular-cookies': '../vendor/angular-cookies/angular-cookies',
		'angular-material': '../vendor/angular-material/angular-material',
		'angular-messages': '../vendor/angular-messages/angular-messages',
		'angular-mocks': '../vendor/angular-mocks/angular-mocks',
		'angular-resource': '../vendor/angular-resource/angular-resource',
		'angular-sanitize': '../vendor/angular-sanitize/angular-sanitize',
		'angular-scenario': '../vendor/angular-scenario/angular-scenario',
		'angular-touch': '../vendor/angular-touch/angular-touch',
		'ui.router': '../vendor/angular-ui-router/release/angular-ui-router.min',
		'hammer': '../vendor/hammerjs/hammer.min',
		'hammerProxy':'hammer-proxy'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-aria': [
			'angular'
		],
		'ui.router': [
			'angular'
		],
		'angular-cookies': [
			'angular'
		],
		'angular-sanitize': [
			'angular'
		],
		'angular-resource': [
			'angular'
		],
		'angular-animate': [
			'angular'
		],
		'angular-touch': [
			'angular'
		],
		'hammer':{
			exports: 'Hammer',
			deps: ['angular']
		},
		'angular-material': {
			deps:[
				'angular',
				'angular-animate',
				'hammerProxy',
				'angular-aria'
			]
		},
		'angular-messages': [
			'angular'
		],
		'angular-mocks': {
			deps: [
				'angular'
			],
			exports: 'angular.mock'
		}
	},
	priority: [
		'angular'
	],
	packages: [

	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
	'angular',
	'app',
	'angular-aria',
	'angular-cookies',
	'angular-sanitize',
	'angular-resource',
	'angular-animate',
	'angular-material',
	'angular-messages',
	'angular-touch',
	'ui.router'
], function(angular, app, ngAria, ngCookies, ngSanitize, ngResource, ngAnimate, hammer, ngMaterial, ngMessages, ngTouch) {
	'use strict';
	/* jshint ignore:start */
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	/* jshint ignore:end */
	angular.element().ready(function() {
		angular.resumeBootstrap([app.name]);
	});
});
