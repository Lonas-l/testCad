
describe('Test Circle', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test drawing circle' , () => {
        cy.canvasDrawing('toolbar-Circle', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '1 line selected');
        cy.get('[data-testid="toolbar-Pointer"]').should('have.class', 'active');
    })

})
