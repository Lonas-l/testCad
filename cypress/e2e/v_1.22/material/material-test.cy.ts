describe('TR #200959 | Bug | Analyser', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })


     it('Analyser says material not specified but I see 7075', () => {
         cy.openFile('../e2e/v_1.22/material/designs/TR200959/Unspecified_Material.emsx');
         cy.get('[data-testid="desktop-material"]').should('have.text', 'Aluminum 6061 T6');
     })

 })