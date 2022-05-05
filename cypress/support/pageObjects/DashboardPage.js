const dashBoardLocators = {
    addEmployeeButton: "#add"
};

export class DashboardPage {

    clickOnAddEmployeeButton() {
        cy.get(dashBoardLocators.addEmployeeButton).click();
    };

    checkNewRecordOnUI(id, name, lastname, dependantNum) {
        cy.calcBenefitsCost(dependantNum).then(benefitsCost => {
            cy.get('tbody').contains('tr', id).then(tableRow => {
                cy.wrap(tableRow).find('td').eq(1).should('contain', name);
                cy.wrap(tableRow).find('td').eq(2).should('contain', lastname);
                cy.wrap(tableRow).find('td').eq(3).should('contain', dependantNum);
                cy.wrap(tableRow).find('td').eq(4).should('contain', 52000.00);
                cy.wrap(tableRow).find('td').eq(5).should('contain', 2000.00);
                cy.wrap(tableRow).find('td').eq(6).should('contain', benefitsCost);
                cy.wrap(tableRow).find('td').eq(7).should('contain', 2000 - benefitsCost);
            });
        });
    };

    clickUpdateRecordButton (id) {
        cy.get('tbody').contains('tr', id).then(tableRow => {
            cy.wrap(tableRow).find('.fa-edit').click();
        });
    };
}