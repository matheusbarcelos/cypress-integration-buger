const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mj6b4p",
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: "https://buger-eats-qa.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
