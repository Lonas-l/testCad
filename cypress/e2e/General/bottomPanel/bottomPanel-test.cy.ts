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

    it('View switch between from bottom panel', () => {
        cy.changeView('bot-panel-Right-view');
        cy.get('[data-testId="bot-panel-Right-view"]').should('have.class', 'active');

        cy.changeView('bot-panel-Left-view');
        cy.get('[data-testId="bot-panel-Left-view"]').should('have.class', 'active');

        cy.changeView('bot-panel-Front-view');
        cy.get('[data-testId="bot-panel-Front-view"]').should('have.class', 'active');

        cy.changeView('bot-panel-Back-view');
        cy.get('[data-testId="bot-panel-Back-view"]').should('have.class', 'active');

        cy.changeView('bot-panel-Bottom-view');
        cy.get('[data-testId="bot-panel-Bottom-view"]').should('have.class', 'active');
    })

})