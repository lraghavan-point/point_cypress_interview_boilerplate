const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    KBYG_URL: 'https://partner-qa.point.dev/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
