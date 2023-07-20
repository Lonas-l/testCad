describe('TR #198887 | Bug | Workspace', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it('After erasing text, we can\'t return back', () => {
        cy.canvasDrawing('toolbar-Text', [{x: 100, y: 100}]);
        cy.get('[data-testid="numeric-text"]').focus().clear().type('some text');
        cy.canvasDrawing('toolbar-Eraser', [{x: 105, y: 90}]);
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '0 lines');
        cy.get('.sprite-undo').should('not.have.class', 'disabled-action').click();
        cy.selectAll();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '1 line selected');
    })
})
