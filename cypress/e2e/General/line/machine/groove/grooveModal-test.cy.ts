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
        cy.get('li').contains('1 - 1.00", 1.00", 1.00"').should('exist');
    })

    it('Check add button, when value is entered', () => {
        cy.addGroove('1', '1', '1');
        cy.removeSelectedGroove();
        cy.get('li').should('not.visible');
    })

    it('Double-clicking on a groove to copy its values into the field\'s input', () => {
        cy.addGroove('1', '1', '1');
        cy.get('.selected').dblclick();
        cy.get('.groove_data-inputs > :nth-child(1) > input').should('have.value', '1.00"');
        cy.get('.groove_data-inputs > :nth-child(2) > input').should('have.value', '1.00"');
        cy.get('.groove_data-inputs > :nth-child(3) > input').should('have.value', '1.00"');
    })

    it('Check replace button', () => {
        cy.addGroove('1','1','1');
        cy.replaceGroove('2', '2', '2');
        cy.get('li').contains('1 - 2.00", 2.00", 2.00"').should('exist');
    })

    it('Check saving grooves when clicked on Ok', () => {
        cy.addGroove('1','1','1');
        cy.get('.MuiDialogActions-root > :nth-child(1) > .MuiButton-label').click();
        cy.openGrooveModal();
        cy.get('li').contains('1 - 1.00", 1.00", 1.00"').should('exist');
    })

    it('Check cancel grooves when clicked on cancel', () => {
        cy.addGroove('1','1','1');
        cy.get('#groove > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > :nth-child(2)').click();
        cy.openGrooveModal();
        cy.get('li').should('not.visible');
    })

    it('Check add button with zero value', () => {
        cy.addGroove('0','0','0');
        cy.get('#info-modal-dialog-content > div > p').should('have.text', 'Groove top depth must be larger than 0.0.\n Specify positive non-zero value.')
        cy.get('#info-modal > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root').click();

        cy.get('.groove_control-panel > :nth-child(2)').should('be.disabled');
        cy.get('.groove_control-panel > :nth-child(3)').should('be.disabled');
        cy.get('#groove > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.Mui-disabled.Mui-disabled').should('be.disabled');
    })

    // it('Check confirm when pressed enter', () => {
    //     cy.addGroove('1','1','1');
    //     if (!Cypress.isBrowser('firefox')) {
    //         cy.realPress('Enter');
    //         cy.openGrooveModal();
    //         cy.get('li').contains('1 - 1.00", 1.00", 1.00"').should('exist');
    //     }
    // })
})