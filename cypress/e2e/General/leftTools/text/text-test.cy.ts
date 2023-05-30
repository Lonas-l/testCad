
describe('Text Test', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Clicked on board – input is in focus' , () => {
        cy.canvasDrawing('toolbar-Text', [{x: 100, y: 100}]);
        cy.get('[data-testid="numeric-text"]').should('be.focused');
    })

    it('Clicked on board – tool is Pointer' , () => {
        cy.canvasDrawing('toolbar-Text', [{x: 100, y: 100}]);
        cy.get('[data-testid="toolbar-Pointer"]').should('have.class', 'active');
    })

})
