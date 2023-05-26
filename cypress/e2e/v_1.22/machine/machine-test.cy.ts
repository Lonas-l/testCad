describe('TR #201107 | Critical error | Line | Machine\n', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('After click on the Esc button 2 times, I get an error', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.get('.sprite-LineMachine').click();

        if (!Cypress.isBrowser('firefox')) {
            cy.realPress('{esc}');
            cy.realPress('{esc}');
        }
    })
})

describe('2285 | Critical error | Line | Machine', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('After changing line type to auto for text, we get an error', () => {
        cy.get('#app > div > section > div.LeftMenu > button:nth-child(9)').click();
        cy.get('canvas').click(100,100);
        cy.get('#text').type('qwe')
        cy.get('.sprite-LineMachine').click();
        cy.get('#undefined-dialog-content > div > div > div.left-side > fieldset > ul > li:nth-child(1)').click();
        cy.get('body > div.MuiDialog-root.lineMachineModal > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.modalFooter.MuiDialogActions-spacing > div.buttonContainer > button:nth-child(1)').click();
        cy.downloadDesign();
    })
})
