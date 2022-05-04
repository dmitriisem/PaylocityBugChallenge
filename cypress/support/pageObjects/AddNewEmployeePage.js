
const addNewEmployeePageLocators = {
    firstNameField: "#firstName",
    lastNameField: "#lastName",
    dependantsField: "#dependants",
    addButton: "#addEmployee"
}

export class AddNewEmployeePage {

    addNewRecord(firstName, lastName, dependantNum) {
        cy.intercept('POST', '**/employees').as('postEmployee');
        cy.get(addNewEmployeePageLocators.firstNameField).type(firstName);
        cy.get(addNewEmployeePageLocators.lastNameField).type(lastName);
        cy.get(addNewEmployeePageLocators.dependantsField).type(dependantNum);
        cy.get(addNewEmployeePageLocators.addButton).click();
        cy.wait('@postEmployee');
        cy.get('@postEmployee').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(200);
            expect(xhr.response.body.firstName).to.eq(firstName);
            expect(xhr.response.body.lastName).to.eq(lastName);
            expect(xhr.response.body.dependants).to.eq(dependantNum);
            expect(xhr.response.body.gross).to.eq(2000);
            expect(xhr.response.body.salary).to.eq(52000);
            cy.calcBenefitsCost(dependantNum).then(benefitsCost => {
                expect((xhr.response.body.benefitsCost).toFixed(2)).to.eq(benefitsCost);
                expect(+(xhr.response.body.net.toFixed(2))).to.eq(2000 - benefitsCost);
            })
            const xx = xhr.response.body.id;
            cy.wrap(xx).as('id');
        })
        return cy.get('@id');
    }
}
