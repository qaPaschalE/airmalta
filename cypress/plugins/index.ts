/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
module.exports = (on, config) => {
  const bundler = createBundler({
    // any ESBuild options here
    // https://esbuild.github.io/api/
  });
  on("file:preprocessor", createBundler(), bundler);
};
