var Jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome',
      'unexpectedAlertBehaviour': 'accept'
    },
    plugins : [{
      path: 'node_modules/protractor-istanbul-plugin',
      logAssertions: true,
      failAssertions: true
    }],  
    specs: ['spec.js'],
    onPrepare: function(){
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                      savePath: './test/reports'
      }),
      jasmine.getEnv().addReporter(new SpecReporter({ 
        spec: { displayStacktrace: true } }))
      );
    }
  };
