var Jasmine2HtmlReporter=require('C://Users//priyankam//AppData//Roaming//npm//node_modules//protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome',
      'unexpectedAlertBehaviour': 'accept'
    },
    specs: ['spec.js'],
    onPrepare: function(){
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                      savePath: './test/reports'
      })
      );
    }
  };
