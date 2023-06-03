describe('TR #201519 | Bug | Price', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Check price for minimal distance between 2 shape', () => {
        cy.openFile('../e2e/v_1.23/price/designs/TR201519/Min_Distance.emsx');
        cy.login();
        cy.openPrice(true);
        cy.get('[data-testId="Price-dialog"]').should('exist');
    })

    it('Check price for maximal distance between 2 shape', () => {
        cy.openFile('../e2e/v_1.23/price/designs/TR201519/Max_Distance.emsx');
        cy.login();
        cy.openPrice(true);
        cy.get('[data-testId="Price-dialog"]').should('exist');
    })
})