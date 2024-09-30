import { defineConfig } from "cypress";
/// <reference types="cypress"/>
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 25000,
    requestTimeout: 90000,
    responseTimeout: 90000,
    chromeWebSecurity: false,
    viewportWidth: 1400,
    viewportHeight: 1000,
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
   
    env: {

    FRONTEND_URL: 'https://ultimateqa.com/automation/'

    },


  },
});
