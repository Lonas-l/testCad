describe('Login', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('test login positive', () => {
        cy.login();
        cy.get('.Menu > div > svg').should('be.visible');
    })

    it('test login negative', () => {
        cy.login(Cypress.env('INCORRECT_USER_EMAIL'));
        cy.get('h6').contains('You are not registered. Please sign up!');
    })
})

describe('Registration', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test registration positive', () => {
        cy.registration('name', 'lastName', 'company', Math.random() + '@example.com',
            '12345', 'street', 'city', '12345', 'password');
        cy.get('[data-testid="info-message"]').should('have.text','Registration completed. We sent you a verification link, please see your email.');
    })
})

describe('Restore password', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test restore password positive', () => {
        cy.openSignInModal();
        cy.get('[data-testid="login-restore-password"]').click();
        cy.get('[data-testid="restore-email"]').type(Cypress.env('USER_EMAIL'));
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/api/auth/reset-password`).as('restorePasswordResponse');
        cy.get('[data-testid="Restore-OK"]').click();
        cy.wait('@restorePasswordResponse');
        cy.get('[data-testid="info-message"]').should('have.text', 'We emailed you a reset password link. Please use that link to login and change your password. If you didn\'t receive an email, please check your spam or ads.')
    })

})

