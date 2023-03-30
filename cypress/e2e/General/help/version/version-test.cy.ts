describe('Version', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Modal windows shows correct info about version, release dates, and copyright dates.\n', () => {
        cy.get('[data-testid="desktop-show-dropdown-Help"]').click();
        cy.get('[data-testid="desktop-menu-item-version"]').click();

        cy.get('.ContentHeader > .MuiTypography-root').should('exist');
        cy.get('.ContentTop > .MuiTypography-root').should('exist');
        cy.get('[style="margin-bottom: 5px; padding: 5px;"]').should('exist');

    })
})