describe('Login', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('test login positive', () => {
        cy.login();
        cy.get('.Menu > div > svg').should('be.visible');
    })

    it('test login negative', () => {
        cy.login(Cypress.env('INCORRECT_USER_EMAIL'));
        cy.get('h6').contains('You are not registered. Please sign up!');
    })
})