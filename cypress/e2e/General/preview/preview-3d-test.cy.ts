describe('3D preview load designs', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('test 3D preview', () => {
        cy.openFile('./preview/preview.emsx');
        cy.isPreviewOpened();
    })
    it('test 3D preview', () => {
        cy.openFile('./preview/preview2.emsx');
        cy.isPreviewOpened();
    })
    it('test 3D preview', () => {
        cy.openFile('./preview/preview3.emsx');
        cy.isPreviewOpened();
    })
})