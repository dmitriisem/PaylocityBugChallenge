import { DashboardPage } from "../../../support/pageObjects/DashboardPage";
import { UpdateRecordPage } from "../../../support/pageObjects/UpdateRecordPage";
import {testData} from "/cypress/integration/uiTests/employeeRecordTests/supportData/negativeUpdateRecordData.json"

describe('Data - driven test for Update Employee Record form', () => {

    // Creating objects of PageObject classes
    const dashboardPage = new DashboardPage();
    const updateRecordPage = new UpdateRecordPage();

    beforeEach(() => {
        // New Cypress feature that will store Cookies/Local storage for future tests. Perfect for Data - driven tests
        cy.loginWithSession(Cypress.env('login'), Cypress.env('password'));
    });

    // Using forEach method for Data-Driven testing and loads data from negativeUpdateRecordData.json file
    testData.forEach(td => {
        it(`should test ${td.field} for unexpected input data`, () => {
            // Need for cy.loginWithSession. Do not touch!
            cy.visit('/')
            dashboardPage.clickUpdateRandomRecord();
            // This will fail because of the bug
            updateRecordPage.checkUpdateRecordPage();
            // Data to update record
            updateRecordPage.updateRecord(td.firstName, td.lastName, td.dependants);
            // Checking if error message is visible
            updateRecordPage.checkErrorMessage(td.errorMessage);
        });
    });
});