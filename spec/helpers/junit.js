const reporters = require('jasmine-reporters');

const options = {
  savePath: __dirname + '/../../report/',
  filePrefix: 'JSDays17'
};
junitReporter = new reporters.JUnitXmlReporter(options);
jasmine.getEnv().addReporter(junitReporter);
