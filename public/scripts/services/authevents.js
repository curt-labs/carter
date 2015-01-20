define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc service
	 * @name carter.AuthEvents
	 * @description
	 * # AuthEvents
	 * Constant in the carter.
	 */
	angular.module('carter.services.AuthEvents', [])
	.constant('AuthEvents', {
		loginSuccess: 'auth-login-success',
		loginFailed: 'auth-login-failed',
		logoutSuccess: 'auth-logout-success',
		sessionTimeout: 'auth-session-timeout',
		notAuthenticated: 'auth-not-authenticated',
		notAuthorzed: 'auth-not-authorized'
	});
});
