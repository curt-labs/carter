define(['angular'], function (angular) {
	'use strict';

	/**
   * @ngdoc service
   * @name carter.Cart
   * @description
   * # Cart
   * Service in the carter.
   */
  angular.module('carter.services.Cart', [])
	.service('Cart', function () {

		var cart = {
			items: [],
			user: {}
		};

		cart.addItem = function(item){
			console.log(item);
			cart.items.push(item);
		};

	});
});
