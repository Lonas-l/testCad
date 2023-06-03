
describe('Right tools panel test', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
     });

    it('When selected rotate mode and we move with of keys on right tools panel new element is created on each move', () => {
        cy.openFile('./All_Line_Types.emsx');
        cy.selectAll();
        cy.get('#app > div > div.ToolsPanel > div.Right-Tools > input[type=text]:nth-child(6)').clear().type('0.5');
        cy.enableRotateMode();
        cy.nudgeUp();
        cy.nudgeRight();
        cy.nudgeDown();
        cy.nudgeLeft();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/All_Line_Types.emsx', 'cypress/fixtures/rightToolsPanel/All_Line_Types_Nudge.emsx')
    });

    it('When selected rotate mode and when click it rotates selected element on specified in the right input degree value.', () => {
        cy.openFile('./All_Line_Types.emsx');
        cy.selectAll();
        cy.get('#app > div > div.ToolsPanel > div.Right-Tools > input[type=text]:nth-child(10)').clear().type('45');
        cy.enableRotateMode();
        cy.rotateRight();
        cy.rotateLeft();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/All_Line_Types.emsx', 'cypress/fixtures/rightToolsPanel/All_Line_Types_Rotate.emsx')
    });
 });