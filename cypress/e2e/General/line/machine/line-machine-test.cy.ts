describe('Login', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('line machine is opened without errors', () => {
        cy.get('.sprite-LineMachine').click();
    })

})