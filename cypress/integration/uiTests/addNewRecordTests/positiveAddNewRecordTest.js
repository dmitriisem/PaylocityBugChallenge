import {LoginPage} from "../../../support/pageObjects/LoginPage";
import {DashboardPage} from "../../../support/pageObjects/DashboardPage";
import {AddNewEmployeePage} from "../../../support/pageObjects/AddNewEmployeePage";
import faker from "@faker-js/faker";


describe('Positive test for "add new employee" feature', () => {

    const loginPage = new LoginPage();
    const dashBoardPage = new DashboardPage();
    const addNewEmployeePage = new AddNewEmployeePage();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const dependantNum = faker.datatype.number({
        'min': 0,
        'max': 32
    });

    it('should run positive test for "add new employee" form %use after%',function () {
        cy.visit('/');
        loginPage.loginToApplication(Cypress.env('login'), Cypress.env('password'));
        dashBoardPage.clickOnAddEmployeeButton();
        addNewEmployeePage.addNewRecord(firstName, lastName, dependantNum).then(id => {
            cy.wrap([id]).as('recordId');
            dashBoardPage.checkNewRecordOnUI(id, firstName, lastName, dependantNum);
        });
    });
});