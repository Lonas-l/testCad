describe('App test', () => {

     it('TR #201479 | Critical error | Verification link ' +
         'After going in incorrect verification link, i get an error', () => {
         cy.visit(`${Cypress.env('FRONT_URL')}/#/email-verification/`);
         cy.get('[data-testid="info-message"]').should('have.text',
             'The authentication link is not recognized - please contact support.')
     })
 })
