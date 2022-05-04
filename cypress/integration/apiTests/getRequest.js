describe('GET request via cypress', () => {

    it('should test GET request', function () {
        cy.request({
            method: "GET",
            url: Cypress.env('apiURL'),
            headers: {
                Authorization: "Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080",
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.empty;
        })
    });
})