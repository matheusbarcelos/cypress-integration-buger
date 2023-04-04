const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: "mj6b4p",
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: "https://buger-eats-qa.vercel.app/",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      allureAddVideoOnPass:true;
      return config;
      // implement node event listeners here
    },
  },
});
