
describe('TR #199900 | Bug | Front View | Workspace |', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Simple click on canvas ', () => {
         cy.openFile('../e2e/v_1.22/canvas/designs/TR199900/revolveErasing.emsx');
         cy.goToView('.leftData > :nth-child(5)');
         cy.get('#app > div > section > div.LeftMenu > button:nth-child(8)').click();

         cy.get('canvas').click(483,261 );
         cy.get('.sprite-Download').click();

         cy.viewCompare(
             'cypress/e2e/v_1.22/canvas/designs/TR199900/revolveErasing_Fixed.emsx',
             'cypress/downloads/revolveErasing.emsx'
         )
     })
 })