
describe('Test Line', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test drawing line' , () => {
        cy.canvasDrawing('toolbar-Line', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '1 line selected');
        cy.get('[data-testid="toolbar-Pointer"]').should('have.class', 'active');
    })

})
