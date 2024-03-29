describe('Contour test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it("Positive test with all line type outside round true", () => {
        cy.openFile('All_Line_Types.emsx');
        cy.selectAll();
        cy.openContourModal();
        cy.setContourSettings('1', true, false, true);
        cy.confirmContour(true);
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/All_Line_Types.emsx', 'cypress/fixtures/line/contour/All_Line_Types_Contour_Outside.emsx')
    });

    it("Positive test with all line type inside, round true", () => {
        cy.openFile('All_Line_Types.emsx');
        cy.selectAll();
        cy.openContourModal();
        cy.setContourSettings('0.1', false, true, true);
        cy.confirmContour(true);
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/All_Line_Types.emsx', 'cypress/fixtures/line/contour/All_Line_Types_Contour_Inside.emsx')
    });

    it("Test contour with bend line", () => {
        cy.openFile('Simple_Bend_Line.emsx');
        cy.selectAll();
        cy.openContourModal();
        cy.setContourSettings('1', true, false, true);
        cy.confirmContour(false);
        cy.get('[data-testid="info-message"]').should('have.text', 'Contour not allowed for bend lines')
    });
})
