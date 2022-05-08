import faker from "@faker-js/faker";

const dashBoardLocators = {
    addEmployeeButton: "#add",
    logo: ".navbar-brand",
    logoLink: "/Prod/Benefits",
    logOutButton: "Log Out",
    logOutButtonLink: "/Prod/Account/LogOut",
    copyright: "footer>div",
    copyrightText: "© 2022 - Paylocity",
    pageUrl: "Prod/Benefits"
};

export class DashboardPage {

    clickOnAddEmployeeButton() {
        cy.get(dashBoardLocators.addEmployeeButton).click();
    }

    checkNewRecordOnUI(id, name, lastname, dependantNum) {
        cy.wait(500);
        cy.calcBenefitsCost(dependantNum).then(benefitsCost => {
            cy.get('tbody').contains('tr', id).then(tableRow => {
                cy.wrap(tableRow).find('td').eq(1).should('contain', name);
                cy.wrap(tableRow).find('td').eq(2).should('contain', lastname);
                cy.wrap(tableRow).find('td').eq(3).should('contain', dependantNum);
                cy.wrap(tableRow).find('td').eq(4).should('contain', 52000.00);
                cy.wrap(tableRow).find('td').eq(5).should('contain', 2000.00);
                cy.wrap(tableRow).find('td').eq(6).should('contain', benefitsCost);
                cy.wrap(tableRow).find('td').eq(7).should('contain', 2000 - benefitsCost);
            });
        });
    }

    clickUpdateRecordButton(id) {
        cy.get('tbody').contains('tr', id).then(tableRow => {
            cy.wrap(tableRow).find('.fa-edit').click();
        });
    }

    clickDeleteRecordButton(id) {
        cy.get('tbody').contains('tr', id).then(tableRow => {
            cy.wrap(tableRow).find('.fa-times').click();
        });
    }

    checkDeletedRecord(id) {
        cy.wait(500);
        cy.get('tbody').find('tr').each(tableRow => {
            cy.wrap(tableRow).find('td').should('not.contain', id);
        });
    }

    checkDashboardPageElements() {
        cy.url().should('include', dashBoardLocators.pageUrl);
        cy.get(dashBoardLocators.logo).should('have.attr', 'href', dashBoardLocators.logoLink);
        cy.contains(dashBoardLocators.logOutButton).should('have.attr', 'href', dashBoardLocators.logOutButtonLink);
        cy.get(dashBoardLocators.copyright).should('contain.text', dashBoardLocators.copyrightText);
    }

    clickUpdateRandomRecord() {
        cy.get('tbody').find('tr').then(tableRows => {
            const randomRow = faker.datatype.number({
                'min': 0,
                'max': tableRows.length-1
            });
            cy.wrap(tableRows).eq(randomRow).then(row => {
                cy.wrap(row).find('.fa-edit').click();
            });
        });
    }
}