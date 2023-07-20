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

describe('TR #200864 | Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.24/preview/designs/TR200864/TR200864_Preview_Case1.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.24/preview/designs/TR200864/TR200864_Preview_Case2.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.24/preview/designs/TR200864/TR200864_Preview_Case3.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.24/preview/designs/TR200864/TR200864_Preview_Case3.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })
})

describe('TR #202386 | Bug | 3D preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('After open 3D preview, i get an error from expert notice', () => {
        cy.openFile('../e2e/v_1.24/preview/designs/TR202386/TR202386_Preview.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })
})
