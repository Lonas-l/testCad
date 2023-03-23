describe('Find Similar With Groove', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('Find similar select all rectangle elements', () => {
        cy.openFile('./groove/FindSimilar_Groove_Case1.emsx');
        cy.get('canvas').click(80, 40);
        cy.findSimilar();
        cy.get('.dataContainer').should('have.text', '8 lines selected')
    })

    it('Find similar select all line elements', () => {
        cy.openFile('./groove/FindSimilar_Groove_Case2.emsx');
        cy.get('canvas').click(60, 60);
        cy.findSimilar();
        cy.get('.dataContainer').should('have.text', '10 lines selected')
    })

})