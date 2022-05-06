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
import './commands'
import faker from "@faker-js/faker";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// BeforeEach hook to create a new record before API test. Works only if called
beforeEach(() => {

    if ((Cypress.currentTest.title).includes('%use before%')) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const dependantNum = faker.datatype.number({
            'min': 0,
            'max': 32
        });
        cy.postNewRecord(firstName, lastName, dependantNum).as('recordId');
    }
});

// AfterEach hook to delete a record after API test. Works only if called
afterEach(() => {

    if ((Cypress.currentTest.title).includes('%use after%')) {
        cy.get('@recordId').then(([value]) => {
            cy.deleteRecord(value);
        });
    }
});