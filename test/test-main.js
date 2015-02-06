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
        'ui.router': '../vendor/angular-ui-router/release/angular-ui-router.min',
        ngPolymer: '../vendor/ng-polymer-elements/ng-polymer-elements.min',
        bootstrap: '../vendor/bootstrap-sass-official/assets/javascripts/bootstrap',
        jquery: '../vendor/jquery/dist/jquery.min',
        'ui.bootstrap': '../vendor/angular-bootstrap/ui-bootstrap.min',
        ngStorage: '../vendor/ngstorage/ngStorage.min',
        LocalStorageModule: '../vendor/angular-local-storage/dist/angular-local-storage.min',
        'angular-bootstrap': '../vendor/angular-bootstrap/ui-bootstrap-tpls',
        'angular-local-storage': '../vendor/angular-local-storage/dist/angular-local-storage',
        'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',
        'bootstrap-sass-official': '../vendor/bootstrap-sass-official/assets/javascripts/bootstrap',
        'ng-polymer-elements': '../vendor/ng-polymer-elements/ng-polymer-elements',
        ngstorage: '../vendor/ngstorage/ngStorage',
        polymer: '../vendor/polymer/polymer',
        hammerjs: '../vendor/hammerjs/hammer'
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
