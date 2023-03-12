describe('Auto correct solution', () => {

    it('Simple add connector', () => {

        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/gDlh0jSOFbtdsq7CAnNBjoudwzHbLcdx5q1yG9us`)

        cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse')
        cy.get('.sprite-3dPreview').click();
        cy.get(':nth-child(2) > .MuiTypography-root > span').click();
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.wait('@previewResponse')
        cy.get('.popup-container').should('be.visible');
    })
})