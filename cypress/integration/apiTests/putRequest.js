import faker from "@faker-js/faker";

describe('PUT request via Cypress', () => {

    it('should test PUT request', function () {

        cy.get('@recordId').then(([id, firstName, lastName, dependantsNum, salary, grossPay, benefitsCost, net]) => {
            const newFirstName = faker.name.firstName();
            const newLastName = faker.name.lastName();
            const newDependantNum = faker.datatype.number({
                'min': 0,
                'max': 32
            });

            const newBody = {
                "id": id,
                "firstName": newFirstName,
                "lastName": newLastName,
                "dependants": newDependantNum
            }

            cy.request({
                method: "PUT",
                url: Cypress.env('apiURL'),
                headers: {
                    'Authorization': Cypress.env('token'),
                    'Content-Type': "application/json"
                },
                body: newBody
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.firstName).to.eq(newBody.firstName);
                expect(response.body.lastName).to.eq(newBody.lastName);
                expect(response.body.dependants).to.eq(newBody.dependants);
                expect(response.body.salary).to.eq(salary);
                expect(response.body.gross).to.eq(grossPay);
                cy.calcBenefitsCost(newBody.dependants).then( benefitCost => {
                    expect((response.body.benefitsCost).toFixed(2)).to.eq(benefitCost);
                    expect(+((response.body.net).toFixed(2))).to.eq(2000 - benefitCost);
                });
            });
        });
    });
});