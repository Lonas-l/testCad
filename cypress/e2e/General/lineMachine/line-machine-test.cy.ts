describe('Login', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('line machine error', () => {
        cy.get('.sprite-LineMachine').click();
        // cy.get('span[class=MuiButton-label]').contains('OK').click();
    })

})