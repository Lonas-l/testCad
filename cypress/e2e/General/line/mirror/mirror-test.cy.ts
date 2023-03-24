describe('Mirror test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it("Mirror horizontally all types of lines ",  () => {
        cy.openFile('./All_Line_Types.emsx');
        cy.selectAll();
        cy.mirror('horizontally');
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/All_Line_Types.emsx', 'cypress/fixtures/line/mirror/Mirror_Horizontally.emsx')
    });

    it("Mirror vertically all types of lines ",  () => {
        cy.openFile('./All_Line_Types.emsx');
        cy.selectAll();
        cy.mirror('vertically');
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/All_Line_Types.emsx', 'cypress/fixtures/line/mirror/Mirror_Vertically.emsx')
    });
})
