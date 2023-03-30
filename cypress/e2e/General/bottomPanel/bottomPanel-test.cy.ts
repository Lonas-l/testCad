describe('Bottom Panel', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('Filename Label When creating a new file and entering a new name, it is ' +
        'should displayed at the bottom left panel', () => {
        cy.get('[data-testid="desktop-show-dropdown-File"]').click();
        cy.get('[data-testid="desktop-menu-item-new"]').click();
        cy.get('[data-testid="confirmation-cancel"]').click();
        cy.get('[data-testid="save-file-input"]').clear().type('New File Name');
        cy.get('[data-testid="save-file-ok"]').click();
        cy.get('[data-testid="bot-panel-file-name"]').should('have.text', 'New File Name');
    })

    it('View switch between from bottom pane\n', () => {
        cy.changeView('.leftData > :nth-child(3)')
        cy.get('.leftData > :nth-child(3)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(4)')
        cy.get('.leftData > :nth-child(4)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(5)')
        cy.get('.leftData > :nth-child(5)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(6)')
        cy.get('.leftData > :nth-child(6)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(7)')
        cy.get('.leftData > :nth-child(7)').should('have.class', 'active');
    })

})