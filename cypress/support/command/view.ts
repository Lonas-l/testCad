export function openAndConfirmModelBends() : void {
    cy.get('.btn').contains('View').click();
    cy.get('a').contains('Model Bends').click();

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/bends`).as('bendResponse')
    cy.get('.Yes-No-buttons > :nth-child(1) > .MuiButton-label').click();
    cy.wait('@bendResponse')
}