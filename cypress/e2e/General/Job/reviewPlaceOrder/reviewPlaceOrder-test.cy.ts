describe('Test Review & Place Order', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it("price modal is opened",  () => {
        cy.openFile('SimpleRectangle.emsx')
        cy.login();
        cy.get('[data-testid="desktop-show-dropdown-Job"]').contains('Job').click();
        cy.get('ul > :nth-child(4)').click();
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div').should('be.visible');
    });

})