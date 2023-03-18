 describe('2340 Bug | Workspace | Projection', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Test displayed projection', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/2340/projection.emsx')
        cy.getProjection('3.8898313.729832.1101711.9501712.0000016.590000.000001.590003.8898313.729832.1101711.9501712.0000016.590000.000001.59000');
    })
})
