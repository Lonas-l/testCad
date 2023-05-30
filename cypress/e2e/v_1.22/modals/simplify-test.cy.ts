describe('TR #198449 | Bug | Modals Described In The Description', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test modal open message during request ', () => {
         cy.openFile('./SimpleSpline.emsx');
         cy.selectAll();
         cy.openSimplifyModal();
         cy.get(':nth-child(10) > .MuiDialog-container > [data-testid="Tolerance:-dialog"] > .MuiDialogActions-root > .Yes-No-buttons > [data-testid="simplify-ok"]').click();
         cy.openSimplifyModal();
         cy.get('p').should('have.text', 'Please wait until the previous request is completed.')
     })
 })