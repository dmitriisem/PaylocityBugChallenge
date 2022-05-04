import faker from "@faker-js/faker";

describe('PUT request via Cypress', () => {
    it('should test PUT request', function () {
        cy.postNewRecord().then(([id, firstName, lastName, dependantsNum, salary, grossPay, benefitsCost, net]) => {

            const newFirstName = faker.name.firstName();
            const newLastName = faker.name.lastName();
            const newDependantNum = faker.datatype.number({
                'min': 0,
                'max': 32
            });

            const newBody = {
                "id": id,
                "firstName": newFirstName,
                "lastName": newLastName,
                "dependants": newDependantNum
            }

            cy.request({
                method: "PUT",
                url: Cypress.env('apiURL'),
                headers: {
                    'Authorization': "Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080",
                    'Content-Type': "application/json"
                },
                body: newBody
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.firstName).to.eq(newBody.firstName);
                expect(response.body.lastName).to.eq(newBody.lastName);
                expect(response.body.dependants).to.eq(newBody.dependants);
            })
        });
    })
})