
describe('Spur gear test', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
     });

    it('Modal is opened and common value is creating design', () => {
        cy.openToolsDropdown();
        cy.openSpurGearModal();
        cy.confirmWizard();
        cy.confirmRenameFile();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/Untitled.emsx', 'cypress/fixtures/tools/spurGear/Spur_Gear_Common_Settings.emsx')
    });
 });