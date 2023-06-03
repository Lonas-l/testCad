
export function saveDesign() : void {
    cy.openFileDropdown();
    cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse')
    cy.get('[data-testId=desktop-menu-item-save]').click();
    cy.wait('@getDesignsResponse');
}