export function openPreferencesModal() : void {
    cy.get('[data-testid="desktop-up-menu-preferences"]').click();
}

export function openCalibrateModal() : void {
    cy.get('.nav > :nth-child(2)').click();
    cy.get(':nth-child(3) > div > form > .MuiButton-root').click();
}