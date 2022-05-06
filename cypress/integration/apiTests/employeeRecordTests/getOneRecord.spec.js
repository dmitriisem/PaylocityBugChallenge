describe('GET one record via Cypress', () => {

    it('should test GET API request', function () {
        
         // Creating new record via custom function
        cy.postNewRecord().then(([id, firstName, lastName, dependantsNum, salary, grossPay, benefitsCost, net]) => {
            // Sending GET request
            cy.request({
                method: "GET",
                url: Cypress.env('apiURL') + id,
                headers: {
                    Authorization: Cypress.env('token')
                }
            }).then(response => {
                // Asserting response
                expect(response.status).to.eq(200);
                expect(response.body.firstName).to.eq(firstName);
                expect(response.body.lastName).to.eq(lastName);
                expect(response.body.dependants).to.eq(dependantsNum);
                expect(response.body.salary).to.eq(salary);
                expect(response.body.gross).to.eq(grossPay);
                expect(response.body.benefitsCost).to.eq(benefitsCost);
                expect(response.body.net).to.eq(net);
            });
            // Deleting record via custom method
            cy.deleteRecord(id);
        });
    });
});
