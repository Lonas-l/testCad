describe('TR #200221 | Bug | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Test changing Z', () => {
        cy.openFileAndUseSolution(':nth-child(2) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200221/maxZValueOfBend_ChangeZ.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200221/maxZValueOfBend_ChangeZ_Fixed.emsx',
            'cypress/downloads/maxZValueOfBend_ChangeZ.emsx');
    })
})
