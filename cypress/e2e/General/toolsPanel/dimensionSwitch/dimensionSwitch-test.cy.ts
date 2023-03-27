describe('Dimension Switch test', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     });

    it('Check switch to mm', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.changeDimension();
        cy.selectAll();
        cy.get('.sprite-mm').should('be.visible');
        cy.checkDimensionInTheField('.Left-Tools > :nth-child(2) > input', 'mm');
        cy.checkDimensionInTheField(':nth-child(3) > input', 'mm');
        cy.checkDimensionInTheField('.InputSelect > input', 'mm');
    });

 });