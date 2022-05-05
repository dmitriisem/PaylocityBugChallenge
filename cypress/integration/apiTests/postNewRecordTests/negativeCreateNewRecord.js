import {testData} from '/cypress/integration/apiTests/postNewRecordTests/supportData/negativeCreateNewRecData.json'

describe('This is should be data driver API test', () => {

    testData.forEach(td => {
        it(`should test ${td.field} field in the "Add new employee" form`, function () {

            const body = {
                "firstName": td.firstName,
                "lastName": td.lastName,
                "dependants": td.dependants
            };

            const headers = {
                'Authorization': Cypress.env('token'),
                'Content-Type': "application/json"
            };

            cy.request({
                method: "POST",
                url: Cypress.env('apiURL'),
                headers: headers,
                body: body,
                failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.eq(td.statusCode);
                expect(response.body[0].errorMessage).to.eq(td.errorMessage);
            });
        });
    });
});

