exports.config = {
  framework: 'jasmine2',
  seleniumAddress:'http://localhost:4444/wd/hub',
  specs:['e2e/tubeFeature.js'],
  multiCapabilities: {
    browserName: 'firefox'
  }
};