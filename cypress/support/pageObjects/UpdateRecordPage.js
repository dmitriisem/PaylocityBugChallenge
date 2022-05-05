const updateEmployeePageLocators = {
    firstNameField: "#firstName",
    lastNameField: "#lastName",
    dependantsField: "#dependants",
    updateButton: "#updateEmployee"
};

export class UpdateRecordPage {

    updateRecord (newFistName, newLastName, newDependantNum) {
        cy.get(updateEmployeePageLocators.firstNameField).clear().type(newFistName);
        cy.get(updateEmployeePageLocators.lastNameField).clear().type(newLastName);
        cy.get(updateEmployeePageLocators.dependantsField).clear().type(newDependantNum);
        cy.get(updateEmployeePageLocators.updateButton).click();
    };
}