describe('Quantity', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it("Opens quantity modal on click",  () => {
        cy.get(':nth-child(3) > .btn-Material').click();
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div').should('be.visible')
    });

})