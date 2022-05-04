describe('GET one record', () => {
    it('should get only one selected record', function () {
        cy.postNewRecord().then(([id, firstName, lastName, dependantsNum, salary, grossPay, benefitsCost, net]) => {
            cy.wrap(id).as('recordId');
            cy.request({
                method: "GET",
                url: Cypress.env('apiURL') + id,
                headers: {
                    Authorization: "Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080",
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
            })
        })
    });

    afterEach(() => {
        cy.get('@recordId').then(value => {
            cy.deleteRecord(value);
        })
    })
})