describe('Corner Round', () => {
    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/DptrHnZj0VRWC2ptSjPs2R1yZ4XfAefAvRPvNtGl`)
    })

    it('test corner round positive', () => {
        cy.selectAll();
        cy.get('.sprite-CornerTool').click();
        cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type('1');
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/corner`).as('cornerResponse')
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.wait('@cornerResponse')
        cy.get('.sprite-Download').click();
        cy.viewCompare('cypress/downloads/Untitled.emsx', 'cypress/designs/CornerRoundPositive.emsx')
    })
})