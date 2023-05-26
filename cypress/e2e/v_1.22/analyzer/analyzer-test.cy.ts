describe('2656 | Bug | 3D preview', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Analyser doesn\'t running', () => {
         cy.openFile('../e2e/v_1.22/analyzer/designs/2656/Analyzer_Does_Not_Running.emsx');
         cy.get('.sprite-3dPreview').click();
         cy.get('[style="padding-bottom: 0px; text-align: left; max-width: 305px; background-color: rgb(240, 236, 236);"]').should('exist');
     })

 })

describe('2420 | Bug | Analyzer | Analyzer not running', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Analyser doesn\'t running', () => {
        cy.openFile('../e2e/v_1.22/analyzer/designs/2420/Analyzer_Does_Not_Running.emsx');
        cy.get('.sprite-3dPreview').click();
        cy.get('[style="padding-bottom: 0px; text-align: left; max-width: 305px; background-color: rgb(240, 236, 236);"]').should('exist');
    })

})