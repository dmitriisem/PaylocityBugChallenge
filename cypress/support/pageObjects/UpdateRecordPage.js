const updateEmployeePageLocators = {
    firstNameField: "#firstName",
    lastNameField: "#lastName",
    dependantsField: "#dependants",
    updateButton: "#updateEmployee",
    pageName: "h5:eq(0)"
};

export class UpdateRecordPage {

    updateRecord (newFistName, newLastName, newDependantNum) {
        cy.typeText(updateEmployeePageLocators.firstNameField, newFistName);
        cy.typeText(updateEmployeePageLocators.lastNameField, newLastName);
        cy.typeText(updateEmployeePageLocators.dependantsField, newDependantNum);
        cy.get(updateEmployeePageLocators.updateButton).click();
    }

    checkUpdateRecordPage() {
        cy.get(updateEmployeePageLocators.pageName, {timeout: 100}).should('have.text', 'Update Employee');
    }

    checkErrorMessage(errorMessage) {
        cy.contains(errorMessage).should('be.visible');
    }
}