describe('2251 BCAD | Patch | Popup for restore password', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Text in restore password', () => {
        cy.get('[data-testid="sign-in"]').click();
        cy.get('button').contains('Restore password!').click();
        cy.get('[data-testid="restore-email"]').type(`${Cypress.env('USER_EMAIL')}`)
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/api/auth/reset-password`).as('confirmResponse')
        cy.get('[data-testid="Restore-OK"]').click();
        cy.wait('@confirmResponse');
        cy.get('p').contains('We emailed you a reset password link. Please use that link to login and change your password. If you didn\'t receive an email, please check your spam or ads.')
    })
})
