
describe('TR #199900 | Bug | Front View | Workspace', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Incorrect erasing revolve element ', () => {
         cy.openFile('../e2e/v_1.22/canvas/designs/TR199900/revolveErasing.emsx');
         cy.changeView('bot-panel-Front-view');
         cy.get('#app > div > section > div.LeftMenu > button:nth-child(8)').click();

         cy.get('canvas').click(483,261 );
         cy.downloadDesign();

         cy.viewCompare(
             'cypress/e2e/v_1.22/canvas/designs/TR199900/revolveErasing_Fixed.emsx',
             'cypress/downloads/revolveErasing.emsx'
         )
     })
 })

describe('TR #199824 | Bug | Revolve Projection', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('We can change revolve projection', () => {
        cy.openFile('../e2e/v_1.22/canvas/designs/TR199824/Changing_Revolve_Projection.emsx');
        cy.get('canvas').click(210,225);
        cy.changeZ('2', false);
        cy.realPress('Enter');
        cy.get('.logoBlock').click();
        cy.get('canvas').click(400,251);
        cy.get('#app > div > div.ToolsPanel > div.Left-Tools > div:nth-child(3) > div > input[type=text]').should('have.value', "1.000\"");
        cy.downloadDesign();
    })
})