import {DashboardPage} from "../../../support/pageObjects/DashboardPage";
import {UpdateRecordPage} from "../../../support/pageObjects/UpdateRecordPage";
import faker from "@faker-js/faker";
import { LoginPage } from "../../../support/pageObjects/LoginPage";

describe('Tests to to test update record feature', () => {

    // Creating objects of PageObject classes
    const dashBoardPage = new DashboardPage();
    const updateRecordPage = new UpdateRecordPage();
    const loginPage = new LoginPage();

    // Creating new data for form fields
    const newFirstName = faker.name.firstName();
    const newLastName = faker.name.lastName();
    const newDependantNum = faker.datatype.number({
        'min': 0,
        'max': 32
    });

    // This test is flaky. Added retries option.
    it('should create a new record via API and then update it via UI', {retries: 2}, function () {

        // Creating new record via custom method
        cy.postNewRecord().then(([id]) => {
            // Login to application
            loginPage.loginToApplication(Cypress.env('login'), Cypress.env('password'));
            // Updating record
            dashBoardPage.clickUpdateRecordButton(id);
            updateRecordPage.updateRecord(newFirstName, newLastName, newDependantNum);
            // Asserting results
            dashBoardPage.checkNewRecordOnUI(id, newFirstName, newLastName, newDependantNum);
        });
    });
});