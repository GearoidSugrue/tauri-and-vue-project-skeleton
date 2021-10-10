/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

export default (on: any, config: any): any => {
  on('before:browser:launch', (browser: any = {}, launchOptions: any) => {
    if (browser.name === 'chrome' || browser.name === 'edge') {
      launchOptions.args.push('--disable-features=SameSiteByDefaultCookies'); // bypass 401 unauthorized access on chromium-based browsers
      return launchOptions;
    }
    return undefined;
  });

  return {
    ...config,
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
    testFiles: '**/*spec.*',
  };
};
