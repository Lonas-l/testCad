describe('TR #201221 | Bug | Line | Machine | groove | Enter key', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test no errors, when pressed enter in groove modal', () => {
         cy.openFile('./SimpleRectangle.emsx');
         cy.selectAll();
         cy.openMachineModal();
         cy.openGrooveModal();
         cy.realPress('Enter');
     })
 })