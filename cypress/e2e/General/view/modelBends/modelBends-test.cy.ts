
describe('Model bends test', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
     });

    it('Model bends test', () => {
        cy.openFile('./Simple_Bend_Line.emsx');
        cy.openAndConfirmModelBends();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/Simple_Bend_Line.emsx', 'cypress/fixtures/view/modelBends/Model_Bends_Correct.emsx')
    });
 });