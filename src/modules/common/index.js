'use strict';

module.exports =
  angular.module('carter.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
