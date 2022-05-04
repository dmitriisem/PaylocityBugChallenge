import faker from "@faker-js/faker";

describe('POST request using Cypress', () => {

    it('happy path for POST request', function () {
        cy.postNewRecord().then(([a, b, c, d, e]) => {
            console.log(a)
            console.log(b)
            console.log(e)
            // expect(response.status).to.eq(200);
            // expect(response.body.firstName).to.eq(firstName);
            // expect(response.body.salary).to.eq(52000)
        })
    })
})