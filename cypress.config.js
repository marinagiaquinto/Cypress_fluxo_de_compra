const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://www.saucedemo.com',

    viewportWidth:1920,
    viewportheight:1080,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: [
      "cypress/e2e/login.cy.js",
      "cypress/e2e/produto.cy.js",
      "cypress/e2e/carrinho.cy.js",
      "cypress/e2e/finalizar.cy.js",
      "cypress/e2e/compraFinalizada.cy.js"
    ],

    "chromeWebSecurity": false
  },
});
