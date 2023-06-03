describe('2647 | Bug | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.22/preview/designs/2647/2647_Preview.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })
})

describe('2009 | Error | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('3D preview is opened without errors in console', () => {
        cy.openFile('../e2e/v_1.22/preview/designs/2009/Preview_Console_Error.emsx');
        cy.get('[data-testid="desktop-up-menu-3d"]').click();
    })
})

describe('2114 | Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.22/preview/designs/2114/2114_Preview.emsx');
        cy.open3DPreview();
        cy.isPreviewOpened();
    })
})