import {DashboardPage} from "../../../support/pageObjects/DashboardPage";
import {DeleteRecordPage} from "../../../support/pageObjects/DeleteRecordPage";

describe('Test to check delete record feature', () => {

    // Creating objects of PageObject classes
    const dashboardPage = new DashboardPage();
    const deleteRecordPage = new DeleteRecordPage();

    it('should delete record and check results via UI %use before%', function () {

        // Creating new record via API Before Each postNewRecord method
        cy.get('@recordId').then( ([id]) => {
            // Login to application via UI using custom command
            cy.loginViaUi(Cypress.env('login'), Cypress.env('password'));
            // Deleting record
            dashboardPage.clickDeleteRecordButton(id);
            deleteRecordPage.clickDeleteButton();
            // Need to wait until page updated
            cy.wait(350);
            // Checking if record deleted via UI
            dashboardPage.checkDeletedRecord(id);
        });
    });
});