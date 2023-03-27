describe('Version', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Modal windows shows correct info about version, release dates, and copyright dates.\n', () => {
        cy.get('.btn').contains('Help').click();
        cy.get('a').contains('Version').click();

        cy.get('.ContentHeader > .MuiTypography-root').should('exist');
        cy.get('.ContentTop > .MuiTypography-root').should('exist');
        cy.get('[style="margin-bottom: 5px; padding: 5px;"]').should('exist');

    })
})