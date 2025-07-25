const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000, 
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true
    }
  },
});
