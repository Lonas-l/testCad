describe('Find Similar With Groove', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('Find similar select all rectangle elements', () => {
        cy.openFile('./line/machine/groove/FindSimilar_Groove_Case1.emsx');
        cy.canvasClick([{x: 120, y:50}]);
        cy.findSimilar();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '8 lines selected')
    })

    it('Find similar select all line elements', () => {
        cy.openFile('./line/machine/groove/FindSimilar_Groove_Case2.emsx');
        cy.canvasClick([{x: 120, y:30}]);
        cy.findSimilar();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '10 lines selected')
    })

})