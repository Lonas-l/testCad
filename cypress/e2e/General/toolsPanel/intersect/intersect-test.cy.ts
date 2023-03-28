describe('Intersect test', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     });

    it('Test with any line types', () => {
        cy.openFile('../e2e/General/toolsPanel/intersect/designs/All_Line_Types_Intersect.emsx');
        cy.selectAll();
        cy.intersectSelected();
        cy.selectAll();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '79 lines selected');
    });

    it('Intersect with zero selected elements', () => {
        cy.intersectSelected();
        cy.get('p').should('have.text', 'For intersection you must select an element.');
    });

    it('Intersect lines that nothing crossing', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.intersectSelected();
        cy.get('p').should('have.text', 'Highlighted line doesn\'t intersect other lines.')
    });

    it('Intersect thread', () => {
        cy.openFile('./SimpleThread.emsx');
        cy.selectAll();
        cy.intersectSelected();
        cy.get('p').should('have.text', 'The Intersect tool cannot be used with a threaded hole.');
    });

    it('Intersect only projection', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.changeView('.leftData > :nth-child(3)')
        cy.selectAll();
        cy.intersectSelected();
        cy.get('p').should('have.text', 'This action is not permitted for a projection.');
    });
 });