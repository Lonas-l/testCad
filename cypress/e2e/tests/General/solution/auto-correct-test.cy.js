describe('Auto correct solution', () => {

    it('Simple auto correct IntersectMainShape', () => {

        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/hHWfhuIbg5JzVY8MA6hC9FRBY27uGbZV4DEsII9S`)

        cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse')
        cy.get('.sprite-3dPreview').click();
        cy.get(':nth-child(3) > .MuiTypography-root > span').click();
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.wait('@previewResponse')
        cy.get('.popup-container').should('be.visible');
    })
})