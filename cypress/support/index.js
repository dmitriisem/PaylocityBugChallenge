// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// CleanUP before every test suite run. Creates 1 new record for GET Records test to pass.
before(() => {
  cy.request({
    method: 'GET',
    url: Cypress.env('apiURL'),
    headers: {
      Authorization: Cypress.env('token'),
    },
  }).then((response) => {
    cy.get(response.body).each((record) => {
      cy.deleteRecord(record.id);
    });
      cy.postNewRecord();
  });
});
