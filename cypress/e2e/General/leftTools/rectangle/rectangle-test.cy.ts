
describe('Test Rectangle', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test drawing rectangle' , () => {
        cy.canvasDrawing('toolbar-Rectangle', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '4 lines selected');
        cy.get('[data-testid="toolbar-Pointer"]').should('have.class', 'active');
    })

})
