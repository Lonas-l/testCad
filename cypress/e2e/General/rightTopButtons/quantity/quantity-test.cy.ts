describe('Quantity', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it("Opens quantity modal on click",  () => {
        cy.openQuantityModal();
        cy.get('#file-name-modal > div.MuiDialog-container.MuiDialog-scrollPaper > div').should('be.visible')
    });

    it("Quantity value affects the system",  () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.login();
        cy.openQuantityModal();
        cy.changeQuantityInModal('100');
        cy.get(':nth-child(4) > .btn-Material').should('have.text', 'Quantity: 100');
        cy.downloadDesign();
        cy.openPrice(true);
        cy.get('.InputNumber > input').should('have.value', '100');
    });

})