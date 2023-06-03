describe('Auto correct solution', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Simple add connector', () => {

        cy.openFile('./solutions/addConnector.emsx');

        cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse');
        cy.get('[data-testid="desktop-up-menu-3d"]').click();
        cy.get(':nth-child(2) > .MuiTypography-root > span').click();
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.wait('@previewResponse');
        cy.get('.popup-container').should('be.visible');
    })
})