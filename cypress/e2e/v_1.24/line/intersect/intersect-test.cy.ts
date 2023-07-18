
describe('TR #199094 | Bug | Workspace', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it('Intersect created additional circles', () => {
        cy.openFile('../e2e/v_1.24/intersect/designs/TR199094/TR199094_Bug_Workspace.emsx');
        cy.selectAll();
        cy.intersect();
        cy.selectAll();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '129 lines selected');
    })
})