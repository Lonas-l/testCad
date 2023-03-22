// describe('TR #200221 | Bug | 3D Preview', () => {
//
//     beforeEach(() => {
//         cy.deleteDownloadsFolder();
//         cy.visit(`${Cypress.env('FRONT_URL')}`);
//     })
//
//     it('3D preview is opened without errors', () => {
//         cy.openFile('../e2e/v_1.22/preview/designs/TR200221/TR200221_Preview.emsx');
//         cy.isPreviewOpened();
//     })
// })

describe('2647 | Bug | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('3D preview is opened without errors', () => {
        cy.openFile('../e2e/v_1.22/preview/designs/2647/2647_Preview.emsx');
        cy.isPreviewOpened();
    })
})
