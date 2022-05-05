import {DashboardPage} from "../../../support/pageObjects/DashboardPage";
import {UpdateRecordPage} from "../../../support/pageObjects/UpdateRecordPage";
import faker from "@faker-js/faker";

describe('Tests to update record', () => {

    // Creating objects of PageObject classes
    const dashBoardPage = new DashboardPage();
    const updateRecordPage = new UpdateRecordPage();

    // Creating new data for form fields
    const newFirstName = faker.name.firstName();
    const newLastName = faker.name.lastName();
    const newDependantNum = faker.datatype.number({
        'min': 0,
        'max': 32
    });

    it('should create a new record via API and then update it via UI %use before% %use after%', function () {

        // Creating new record via API
        cy.get('@recordId').then(([id]) => {
            // Login to application via UI using custom command
            cy.loginViaUi(Cypress.env('login'), Cypress.env('password'));
            // Updating record
            dashBoardPage.clickUpdateRecordButton(id);
            updateRecordPage.updateRecord(newFirstName, newLastName, newDependantNum);
            // Need to wait until record is updated on the page
            cy.wait(350);
            // Asserting results
            dashBoardPage.checkNewRecordOnUI(id, newFirstName, newLastName, newDependantNum);
            // Deleting record via API After Each deleteRecord method
        });
    });
});