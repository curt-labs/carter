define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name carter.API
   * @description
   * # API
   * Constant in the carter.
   */
  angular.module('carter.services.API', [])
  .constant('API', {
    domain: 'https://goapi.curtmfg.com',
    shop: '54b963688ff6c70001000001',
    key: '9300f7bc-2ca6-11e4-8758-42010af0fd79'
  });
});
