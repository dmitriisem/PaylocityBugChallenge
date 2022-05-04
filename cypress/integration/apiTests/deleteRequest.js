describe('DELETE request via Cypress', ()=> {
    it('should test DELETE request', function () {
        cy.postNewRecord().then(([id, firstName, lastName, dependantsNum, salary, grossPay, benefitsCost, net]) => {
            cy.request({
                method: "DELETE",
                url: Cypress.env('apiURL')+id,
                headers: {
                    'Authorization': "Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080",
                },
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.empty;
            })
        })
    });
})