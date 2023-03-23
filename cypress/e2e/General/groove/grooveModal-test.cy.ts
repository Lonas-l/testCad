describe('Groove modal tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('After click on the Esc button 2 times, I get an error', () => {
        cy.openFile('./simpleRectangle.emsx');
        cy.selectAll();
        cy.openGrooveModal();

        if (!Cypress.isBrowser('firefox')) {
            cy.realPress('{esc}');
            cy.realPress('{esc}');
        }
    })

})