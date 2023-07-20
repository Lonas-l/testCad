describe('TR #202410 | Bug | Print Modal', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Incorrect preview', () => {
        cy.openFile('../e2e/v_1.24/file/print/designs/TR202410/TR202410_Print_Modal.emsx');
        cy.get('[data-testid="desktop-show-dropdown-File"]').click();
        cy.get('[data-testid="desktop-menu-item-print"]').click();

        // cy.get('.printPreview > fieldset').compareSnapshot('search-bar-element')
    })
})

