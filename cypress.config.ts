import { defineConfig } from "cypress";
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}
export default defineConfig({
  fixturesFolder: "cypress/fixtures",
  pageLoadTimeout: 70000,
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  videoUploadOnPasses: false,
  videosFolder: "cypress/mochareports/videos",
  screenshotsFolder: "cypress/mochareports/screenshots",
  env: {
    firstName: "Paschal",
    lastName: "Enyimiri",
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterOpts.json",
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    baseUrl: "https://airmalta.com/en",
    specPattern: "**/*.feature",
  },
});
