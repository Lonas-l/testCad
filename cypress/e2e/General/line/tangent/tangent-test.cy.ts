describe('Tangents test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it("Check with TANGENTS line type ",  () => {
        cy.openFile('./line/tangent/Line_Tangents_Tolerance.emsx');
        cy.selectAll();
        cy.tangent();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/Line_Tangents_Tolerance.emsx', 'cypress/fixtures/line/tangent/Line_Tangents_Tolerance_Correct.emsx')
    });

    it("Check with AUTO line type ",  () => {
        cy.openFile('./line/tangent/Line_Tangents_Auto.emsx');
        cy.selectAll();
        cy.tangent();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/Line_Tangents_Auto.emsx', 'cypress/fixtures/line/tangent/Line_Tangents_Auto_Correct.emsx')
    });

    it("Check with THREAD line type ",  () => {
        cy.openFile('./line/tangent/Line_Tangents_Thread.emsx');
        cy.selectAll();
        cy.tangent();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/Line_Tangents_Thread.emsx', 'cypress/fixtures/line/tangent/Line_Tangents_Thread_Correct.emsx')
    });

    it("Check with COMMENT line type ",  () => {
        cy.openFile('./line/tangent/Line_Tangents_Comment.emsx');
        cy.selectAll();
        cy.tangent();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/Line_Tangents_Comment.emsx', 'cypress/fixtures/line/tangent/Line_Tangents_Comment_Correct.emsx')
    });

    it("Check with non circle element ",  () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.tangent();
        cy.get('p').should('have.text', 'Error: Please select at least two circles/arcs.')
    });
})
