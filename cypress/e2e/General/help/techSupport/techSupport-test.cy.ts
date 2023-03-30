describe('Feedback', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('test tech support positive', () => {
        cy.openTechSupportModal();
        cy.sendFeedback('kobane3467@fgvod.com', 'description description description')
        cy.get('.MuiPaper-root').contains('Thank you - we will reply shortly.').should('be.visible');
    })

    it('test tech support incorrect email', () => {
        cy.openTechSupportModal();
        cy.sendFeedback('qwe', 'description description description')
        cy.get('[data-testid="tech-support-ok"]').should('be.disabled');
    })

    it('test tech support incorrect description', () => {
        cy.openTechSupportModal();
        cy.sendFeedback('kobane3467@fgvod.com', ' ')
        cy.get('[data-testid="tech-support-ok"]').should('be.disabled');
    })

})