describe('DELETE request via Cypress', () => {

    it('should test DELETE request %use before%', function () {
        // Creating new record via API Before Each postNewRecord method
        cy.get('@recordId').then(([id]) => {
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
                // Deleting record via API After Each deleteRecord method
            });
        });
    });
});