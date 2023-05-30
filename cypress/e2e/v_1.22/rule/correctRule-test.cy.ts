describe('TR #200900 | Bug | Expert Notice | Incorrect rule', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Expert Notice is opened and suggest incorrect rule', () => {
        cy.openFile('../e2e/v_1.22/rule/designs/TR200900/IncorrectRule.emsx');
        cy.get('[data-testid="desktop-up-menu-3d"]').click();
        cy.get('p').should('have.text', 'ERROR: Lines intersect at the dot(s).\nThis is not permitted.\nPlease revise the design to eliminate intersections.\nIf the problem is not visible, zoom in for a close view or select a line and nudge the line a small distance.\nIn some cases you can resolve an intersection by using the Eraser tool to remove certain line segments.')
    })
})
