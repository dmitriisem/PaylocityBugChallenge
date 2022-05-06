import {testData} from '/cypress/integration/apiTests/employeeRecordTests/supportData/negativeCreateNewRecData.json'

describe('Negative data - driven tests using POST request via Cypress', () => {

    // Using forEach method for Data-Driven testing and loads data from negativeCreateNewRecData.json file
    testData.forEach(td => {
        it(`should test ${td.field} field in the "Add new employee" form`, function () {

            // Data for request body
            const body = {
                "firstName": td.firstName,
                "lastName": td.lastName,
                "dependants": td.dependants
            };

            // Headers for request
            const headers = {
                'Authorization': Cypress.env('token'),
                'Content-Type': "application/json"
            };

            // Sending POST request
            cy.request({
                method: "POST",
                url: Cypress.env('apiURL'),
                headers: headers,
                body: body,
                failOnStatusCode: false
            }).then(response => {
                // Asserting response. Needs try/catch block to delete record if test failed and record was added to the table
                try {
                    expect(response.status).to.eq(td.statusCode);
                    expect(response.body[0].errorMessage).to.eq(td.errorMessage);
                } catch (errorMessage) {
                } finally {
                    if (response.status !== td.statusCode) {
                        cy.deleteRecord(response.body.id);
                        // Workaround to throw an error in Cypress. Do not touch!
                        cy.get('Throw Assertion error here', {timeout: 100})
                    };
                };
            });
        });
    });
});

