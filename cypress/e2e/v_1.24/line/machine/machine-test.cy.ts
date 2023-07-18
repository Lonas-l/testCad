describe('TR #202430 | Bug | Line Machine\n', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('If we imported design via drag and drop, while line machine modal is opened, we get an error', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.openFile('SimpleCircle.emsx');
    })
})
