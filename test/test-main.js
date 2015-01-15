var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		// Removed "Spec" naming from files
		if (/Spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

requirejs.config({
		// Karma serves files from '/base'
		baseUrl: '/base/public/scripts',

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
		'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',
		'ngStorage': '../vendor/ngstorage/ngStorage.min',
		'hammer': '../vendor/hammerjs/hammer'
	},

		shim: {
				'angular' : {'exports' : 'angular'},
				'angular-route': ['angular'],
				'angular-cookies': ['angular'],
				'angular-sanitize': ['angular'],
				'angular-resource': ['angular'],
				'angular-animate': ['angular'],
				'angular-touch': ['angular'],
				'ngStorage':['angular'],
				'angular-mocks': {
					deps:['angular'],
					'exports':'angular.mock'
				}
		},

		// ask Require.js to load these files (all our tests)
		deps: tests,

		// start test run, once Require.js is done
		callback: window.__karma__.start
});
