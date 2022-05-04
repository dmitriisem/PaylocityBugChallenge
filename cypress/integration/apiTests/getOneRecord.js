describe('GET one record', () => {

    it('should test GET API request use before use after', function () {
        cy.get('@recordId').then(([id, firstName, lastName, dependantsNum, salary, grossPay, benefitsCost, net]) => {
            cy.request({
                method: "GET",
                url: Cypress.env('apiURL') + id,
                headers: {
                    Authorization: Cypress.env('token')
                }
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.firstName).to.eq(firstName);
                expect(response.body.lastName).to.eq(lastName);
                expect(response.body.dependants).to.eq(dependantsNum);
                expect(response.body.salary).to.eq(salary);
                expect(response.body.gross).to.eq(grossPay);
                expect(response.body.benefitsCost).to.eq(benefitsCost);
                expect(response.body.net).to.eq(net);
            });
        });
    });
});
