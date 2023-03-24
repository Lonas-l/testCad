describe('2563 | Bug | Select Connected', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('After click on select connected button, i get an error ', () => {
         cy.openFile('./SimpleRectangle.emsx');
         cy.selectAll();
         cy.get('#app > div > div.UpMenu > div > div.LeftButtonGroup > div.btn-group-two > button:nth-child(5)').click();
         cy.selectConnected();
         cy.get('.dataContainer').should('have.text', '4 lines selected');
         cy.downloadDesign();
     })
 })