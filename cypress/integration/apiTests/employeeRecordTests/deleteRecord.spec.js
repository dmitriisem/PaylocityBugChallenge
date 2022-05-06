describe('DELETE request via Cypress', () => {

    it('should test DELETE request', function () {

         // Creating new record via custom function
        cy.postNewRecord().then(([id]) => {
            // Sending DELETE request
            cy.request({
                method: "DELETE",
                url: Cypress.env('apiURL') + id,
                headers: {
                    'Authorization': Cypress.env('token')
                }
            }).then(response => {
                // Asserting response
                expect(response.status).to.eq(200);
                expect(response.body).to.be.empty;
            });
        });
    });
});