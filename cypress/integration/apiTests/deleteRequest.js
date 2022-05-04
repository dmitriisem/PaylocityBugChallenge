describe('DELETE request via Cypress', ()=> {
    it('should test DELETE request use before', function () {
        cy.get('@recordId').then(([id]) => {
            cy.request({
                method: "DELETE",
                url: Cypress.env('apiURL')+id,
                headers: {
                    'Authorization': Cypress.env('token')
                }
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.empty;
            });
        });
    });
});