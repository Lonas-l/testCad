describe('TR #200255 | Error | 3D Preview IncorrectShapeContent', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(2) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200255/IncorrectShapeContent_SetZToThru.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200255/IncorrectShapeContent_SetZToThru_Fixed.emsx',
            'cypress/downloads/IncorrectShapeContent_SetZToThru.emsx');
    })
})
