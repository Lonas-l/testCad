describe('Groove modal tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.openGrooveModal();
    })

    it('After click on the Esc button 2 times, I get an error', () => {

        if (!Cypress.isBrowser('firefox')) {
            cy.realPress('{esc}');
            cy.realPress('{esc}');
        }
    })

    it('Check add button, when value is entered', () => {
        cy.addGroove('1', '1', '1');
        cy.get('[data-testid="groove-data-display"]').contains('1 - 1.000", 1.000", 1.000"').should('exist');
    })

    it('Check add button, when value is entered', () => {
        cy.addGroove('1', '1', '1');
        cy.removeSelectedGroove();
        cy.get('[data-testid="groove-data-display"]').should('not.exist');
    })

    it('Double-clicking on a groove to copy its values into the field\'s input', () => {
        cy.addGroove('1', '1', '1');
        cy.get('.selected').dblclick();
        cy.get('[data-testid="groove-top-depth"]').should('have.value', '1.000"');
        cy.get('[data-testid="groove-width"]').should('have.value', '1.000"');
        cy.get('[data-testid="groove-horizontal-depth"]').should('have.value', '1.000"');
    })

    it('Check replace button', () => {
        cy.addGroove('1','1','1');
        cy.replaceGroove('2', '2', '2');
        cy.get('[data-testid="groove-data-display"]').contains('1 - 2.000", 2.000", 2.000"').should('exist');
    })

    it('Check saving grooves when clicked on Ok', () => {
        cy.addGroove('1','1','1');
        cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click();
        cy.openGrooveModal();
        cy.get('[data-testid="groove-data-display"]').contains('1 - 1.000", 1.000", 1.000"').should('exist');
    })

    it('Check cancel grooves when clicked on cancel', () => {
        cy.addGroove('1','1','1');
        cy.get('[data-testid="groove-cancel"]').click();
        cy.openGrooveModal();
        cy.get('[data-testid="groove-data-display"]').should('not.exist');
    })

    it('Check add button with zero value', () => {
        cy.addGroove('0','0','0');
        cy.get('[data-testid="info-message"]').should('have.text', 'Groove top depth must be larger than 0\nSpecify positive non-zero value.');
        cy.get('#info-modal > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root').click();

        cy.get('[data-testid="groove-replace"]').should('be.disabled');
        cy.get('[data-testid="groove-remove"]').should('be.disabled');
        cy.get('#groove > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.Mui-disabled.Mui-disabled').should('be.disabled');
    })

    it('Check confirm when pressed enter', () => {
        cy.addGroove('1','1','1');
        if (!Cypress.isBrowser('firefox')) {
            cy.realPress('Enter');
            cy.openGrooveModal();
            cy.get('[data-testid="groove-data-display"]').contains('1 - 1.000", 1.000", 1.000"').should('exist');
        }
    })
})