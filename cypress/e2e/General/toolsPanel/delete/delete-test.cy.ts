describe('Delete test', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     });

    it('Test delete rectangle', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.deleteSelected();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '0 lines');
    });
 });