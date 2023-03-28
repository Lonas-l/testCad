
describe('Test Spline', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test drawing spline' , () => {
        cy.canvasDrawing('toolbar-Spline', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '1 line selected');
        cy.get('[data-testid="toolbar-EditLine"]').should('have.class', 'active');
    })

})
