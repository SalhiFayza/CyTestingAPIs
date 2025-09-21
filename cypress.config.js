const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportPageTitle:'APIs ❤️‍🔥',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    baseUrl: "https://automationexercise.com/api",
    specPattern: "cypress/e2e/APIs/*.js",
    screenshotsFolder: "cypress/screenshots",

    setupNodeEvents(on, config) {
      // Enable Mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
