describe('GET request via cypress', () => {

    it('should test GET request', function () {
        // Sending GET request
        cy.request({
            method: "GET",
            url: Cypress.env('apiURL'),
            headers: {
                Authorization: Cypress.env('token'),
            }
        }).then(response => {
            // Asserting response
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.empty;
        });
    });
});