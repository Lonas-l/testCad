describe('Auto correct solution', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Simple add connector', () => {

        cy.openFile('./rule/addConnector.emsx');

        cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse')
        cy.get('.sprite-3dPreview').click();
        cy.get(':nth-child(2) > .MuiTypography-root > span').click();
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.wait('@previewResponse')
        cy.get('.popup-container').should('be.visible');
    })
})