const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
