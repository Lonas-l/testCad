
describe('Pointer Line', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Selected by default' , () => {
        cy.get('[data-testid="toolbar-Pointer"]').should('have.class', 'active');
    })

})
