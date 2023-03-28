
describe('Test Eraser', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test drawing and erase rectangle' , () => {
        cy.canvasDrawing('toolbar-Rectangle', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.canvasDrawing('toolbar-Eraser', [{x: 100, y: 100}]);
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '0 lines');
        cy.get('[data-testid="toolbar-Eraser"]').should('have.class', 'active');
    })

})
