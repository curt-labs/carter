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
    'angular-route': '../vendor/angular-route/angular-route',
    'angular-sanitize': '../vendor/angular-sanitize/angular-sanitize',
    'angular-scenario': '../vendor/angular-scenario/angular-scenario',
    'angular-touch': '../vendor/angular-touch/angular-touch',
    hammer: '../vendor/hammerjs/hammer'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-aria': [
      'angular'
    ],
    'angular-route': [
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
    'angular-material': [
      'angular',
      'hammer'
    ],
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
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'hammer',
  'angular-material',
  'angular-messages',
  'angular-touch'
], function(angular, app, ngAria, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, hammer, ngMaterial, ngMessages, ngTouch) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
