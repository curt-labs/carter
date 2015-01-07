// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', "requirejs"],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'public/vendor/angular/angular.js', included: false },
      {pattern: 'public/vendor/angular-mocks/angular-mocks.js', included: false },
      {pattern: 'public/vendor/angular-animate/angular-animate.js', included: false },
      {pattern: 'public/vendor/angular-aria/angular-aria.js', included: false },
      {pattern: 'public/vendor/angular-cookies/angular-cookies.js', included: false },
      {pattern: 'public/vendor/angular-messages/angular-messages.js', included: false },
      {pattern: 'public/vendor/angular-resource/angular-resource.js', included: false },
      {pattern: 'public/vendor/angular-ui-router/release/angular-ui-router.min.js', included: false },
      {pattern: 'public/vendor/angular-sanitize/angular-sanitize.js', included: false },
      {pattern: 'public/vendor/angular-touch/angular-touch.js', included: false },
      {pattern: 'public/scripts/*.js', included: false },
      {pattern: 'public/scripts/**/*.js', included: false },
      {pattern: 'test/spec/**/*.js', included: false },
      // http://karma-runner.github.io/0.10/plus/requirejs.html
      'test/test-main.js'
    ],

    // list of files / patterns to exclude
    exclude: [
        'public/scripts/main.js'
    ],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
