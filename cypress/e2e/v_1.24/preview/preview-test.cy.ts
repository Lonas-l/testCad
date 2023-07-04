describe('TR #199283 | Bug | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.24/preview/designs/TR199283/TR199283_Preview.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })
})