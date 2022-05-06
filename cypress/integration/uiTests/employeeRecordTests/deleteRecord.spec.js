import {DashboardPage} from "../../../support/pageObjects/DashboardPage";
import {DeleteRecordPage} from "../../../support/pageObjects/DeleteRecordPage";

describe('Test to check delete record feature via UI', () => {

    // Creating objects of PageObject classes
    const dashboardPage = new DashboardPage();
    const deleteRecordPage = new DeleteRecordPage();

    it('should delete record and check results via UI', function () {

        // Creating new record via API Before Each postNewRecord method
        cy.postNewRecord().then( ([id]) => {
            // Login to application via UI using custom command
            cy.loginViaUi(Cypress.env('login'), Cypress.env('password'));
            // Deleting record
            dashboardPage.clickDeleteRecordButton(id);
            deleteRecordPage.clickDeleteButton();
            // Checking if record deleted via UI
            dashboardPage.checkDeletedRecord(id);
        });
    });
});