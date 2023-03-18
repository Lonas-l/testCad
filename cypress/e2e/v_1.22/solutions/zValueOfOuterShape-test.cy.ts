describe('2012 Error | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(2) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/2012/zValueOfOuterShape_SetZ.emsx',
            'cypress/e2e/v_1.22/solutions/designs/2012/zValueOfOuterShape_SetZ_Fixed.emsx',
            'cypress/downloads/zValueOfOuterShape_SetZ.emsx');
    })
})
