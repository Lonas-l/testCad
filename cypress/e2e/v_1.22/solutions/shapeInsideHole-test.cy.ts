describe('TR #200751 | BCAD | Error | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(2) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200751/shapeInsideHole_Remove.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200751/shapeInsideHole_Remove_Fixed.emsx',
            'cypress/downloads/shapeInsideHole_Remove.emsx');
    })
})
