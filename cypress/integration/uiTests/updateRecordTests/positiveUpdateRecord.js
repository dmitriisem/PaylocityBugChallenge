import {DashboardPage} from "../../../support/pageObjects/DashboardPage";
import {UpdateRecordPage} from "../../../support/pageObjects/UpdateRecordPage";
import faker from "@faker-js/faker";

describe('Tests to update record', () => {

    const dashBoardPage = new DashboardPage();
    const updateRecordPage = new UpdateRecordPage();

    const newFirstName = faker.name.firstName();
    const newLastName = faker.name.lastName();
    const newDependantNum = faker.datatype.number({
        'min': 0,
        'max': 31
    });

    it('should create a new record via API and then update it via UI %use before% %use after%', function () {

        // Creating new record via API
        cy.get('@recordId').then(([id]) => {
            cy.loginViaUi(Cypress.env('login'), Cypress.env('password'));
            dashBoardPage.clickUpdateRecordButton(id);
            updateRecordPage.updateRecord(newFirstName, newLastName, newDependantNum);
            cy.wait(250);
            dashBoardPage.checkNewRecordOnUI(id, newFirstName, newLastName, newDependantNum);
        });
    });
});