describe('TR #200221 | Bug | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.22/3DPreview/designs/2219_initial.emsx');
        cy.isPreviewOpened();
    })
})
