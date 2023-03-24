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
    cy.get('p').contains('Registration completed. We sent you a verification link, please see your email.')

    })
})

describe('Restore password', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test registration positive', () => {
        cy.get('span[class="MuiButton-label"]').contains('Sign In').click();
        cy.get(':nth-child(2) > .MuiTypography-subtitle2 > .MuiTypography-root').click();
        cy.get(':nth-child(9) > .MuiDialog-container > .MuiPaper-root > #undefined-dialog-content > :nth-child(1) > form > [style="margin-bottom: 10px; padding: 5px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').focus().type(Cypress.env('USER_EMAIL'))

        cy.intercept('POST', `${Cypress.env('BACK_URL')}/api/auth/confirm`).as('restorePasswordResponse')
        cy.get(':nth-child(9) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > :nth-child(1)').click();
        cy.wait('@restorePasswordResponse')

        cy.get('p').contains('We emailed you a reset password link. Please use that link to login and change your password. If you didn\'t receive an email, please check your spam or ads.')


    })

})

