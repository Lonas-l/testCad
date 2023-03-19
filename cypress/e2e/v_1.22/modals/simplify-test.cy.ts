describe('TR #198449 | Bug | Modals Described In The Description', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test modal open message during request ', () => {
         cy.openFile('./simpleSpline.emsx');
         cy.selectAll();
         cy.openSimplifyModal();
         cy.get(':nth-child(9) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .Yes-No-buttons > :nth-child(1) > .MuiButton-label').click();
         cy.openSimplifyModal();
         cy.get('p').should('have.text', 'Please wait until the previous request is completed.')
     })
 })