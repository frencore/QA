const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.tricentis.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    urlApi: 'https://pokeapi.co/api/v2/pokemon',
  },
});


