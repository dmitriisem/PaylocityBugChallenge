import {LoginPage} from "../../../support/pageObjects/LoginPage";
import {DashboardPage} from "../../../support/pageObjects/DashboardPage";
import {AddNewEmployeePage} from "../../../support/pageObjects/AddNewEmployeePage";
import faker from "@faker-js/faker";

describe('Positive test for "add new employee" feature', () => {

    // Creating objects of PageObject classes
    const loginPage = new LoginPage();
    const dashBoardPage = new DashboardPage();
    const addNewEmployeePage = new AddNewEmployeePage();

    // Creating data for form fields
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const dependantNum = faker.datatype.number({
        'min': 0,
        'max': 32
    });

    it('should run positive test for "add new employee" form',function () {

        // Login to application using PageObject method
        loginPage.loginToApplication(Cypress.env('login'), Cypress.env('password'));
        // Checking dashboard page elements
        dashBoardPage.checkDashboardPageElements();
        // Adding new record to the table
        dashBoardPage.clickOnAddEmployeeButton();
        addNewEmployeePage.addNewRecord(firstName, lastName, dependantNum).then(id => {
            // Asserting new record data via UI
            dashBoardPage.checkNewRecordOnUI(id, firstName, lastName, dependantNum);
        });
    });
});