// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {loginPageLocators} from "./pageObjects/LoginPage";
import faker from "@faker-js/faker";

// Custom command to calculate benefits cost. Returns number
Cypress.Commands.add('calcBenefitsCost', (dependantNum) => {

    cy.wrap((((1000 + dependantNum * 500) / 26).toFixed(2)))
});

// Custom command to create a new record via API. Returns array with data from response
Cypress.Commands.add('postNewRecord', () => {

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const dependantNum = faker.datatype.number({
        'min': 0,
        'max': 32
    });

    const body = {
        "firstName": firstName,
        "lastName": lastName,
        "dependants": dependantNum
    };

    const headers = {
        'Authorization': Cypress.env('token'),
        'Content-Type': "application/json"
    };

    cy.request({
        method: "POST",
        url: Cypress.env('apiURL'),
        headers: headers,
        body: body
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.firstName).to.eq(body.firstName);
        expect(response.body.lastName).to.eq(body.lastName);
        expect(response.body.dependants).to.eq(body.dependants);
        expect(response.body.salary).to.eq(52000);
        expect(response.body.gross).to.eq(2000);
        cy.calcBenefitsCost(body.dependants).then(benefitCost => {
            expect((response.body.benefitsCost).toFixed(2)).to.eq(benefitCost);
            expect(+((response.body.net).toFixed(2))).to.eq(2000 - benefitCost);
        });

        const id = response.body.id;
        const firstN = body.firstName
        const lastN = body.lastName;
        const dependantsN = body.dependants;
        const salary = response.body.salary;
        const grossPay = response.body.gross;
        const benefitsCost = response.body.benefitsCost;
        const net = response.body.net;
        const arr = [id, firstN, lastN, dependantsN, salary, grossPay, benefitsCost, net];
        cy.wrap(arr)
    });
});

// Custom command to delete record via API
Cypress.Commands.add('deleteRecord', (recordId) => {

    cy.request({
        method: "DELETE",
        url: Cypress.env('apiURL')+recordId,
        headers: {
            'Authorization': Cypress.env('token'),
        },
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty;
    })
});

// Custom command to login to application via UI
Cypress.Commands.add('loginViaUi', (username, password) => {

    cy.visit('/');
    cy.get(loginPageLocators.usernameField).type(username);
    cy.get(loginPageLocators.passwordField).type(password);
    cy.get(loginPageLocators.logInButton).click();
});