import faker from "@faker-js/faker";

function postNewRecord() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const dependantNum = faker.datatype.number({
        'min': 0,
        'max': 32
    });
    const body = {
        "firstName": firstName,
        "lastName": lastName,
        "dependants": dependantNum
    };

    const headers = {
        'Authorization': "Basic VGVzdFVzZXIyMDM6L14laihvZ1o2M080",
        'Content-Type': "application/json"
    }
    cy.request({
        method: "POST",
        url: Cypress.env('apiURL'),
        headers: headers,
        body: body
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.firstName).to.eq(body.firstName);
        expect(response.body.salary).to.eq(52000)
    })
}