const timeout = process.env.DEBUG ? 99999999 : 30000;

exports.config = {
  runner: 'local',
  specs: [
    './src/features/**/*.feature'
  ],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome'
  }],
  logLevel: 'error',
  deprecationWarnings: true,
  baseUrl: 'https://evra.geophy.com',
  services: ['selenium-standalone'],
  framework: 'cucumber',
  cucumberOpts: {
    compiler: ['ts:ts-node/register'],
    require: ['./src/**/*.ts'],
    backtrace: false,
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tags: [],
    timeout: 20000,
    ignoreUndefinedDefinitions: false,
  },

  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
  }]],
  before: require('ts-node/register'),
  afterStep: (uri, _, { error }) => {
    if (error) {
      const featureName = uri.split('/').join('_').replace('.feature', '');

      // create screenshot in case of failure
      const filename = `./reports/${featureName}-${Date.now().toString(10)}.png`;
      browser.saveScreenshot(filename);
    }
  },
}
