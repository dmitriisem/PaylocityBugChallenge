const deletePageLocators = {
    deleteButton: "#deleteEmployee"
}

export class DeleteRecordPage {

    clickDeleteButton() {
        cy.get(deletePageLocators.deleteButton).click();
    }
}