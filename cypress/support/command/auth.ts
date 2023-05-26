
export function openSignInModal() : void {
    cy.get('[data-testid="sign-in"]').click();
}

export function login(email : string = Cypress.env('USER_EMAIL') , password : string = Cypress.env('USER_PASSWORD')) : void {
    cy.openSignInModal();
    cy.get('[data-testid="login-email"]').type(email);
    cy.get('[data-testid="login-password"]').type(password);
    cy.get('[data-testid="Sign in-OK"]').click();
}

export function registration(
    name: string,
    lastName: string,
    company: string,
    email: string,
    phone : string,
    street: string,
    city: string,
    zipCode: string,
    password: string,
) : void {
    cy.openSignInModal();
    cy.get('[data-testid="login-sign-up"]').click();

    cy.get('[data-testid="register-first-name"]').type(name);
    cy.get('[data-testid="register-last-name"]').type(lastName);
    cy.get('[data-testid="register-company"]').type(company);
    cy.get('[data-testid="register-email"]').type(email);
    cy.get('[data-testid="register-phone"]').type(phone);

    cy.get('[data-testid="register-street"]').type(street);
    cy.get('[data-testid="register-address-select-country"]').click();
    cy.get('#address-select-country-option-0').click();

    cy.get('[data-testid="State-or-province-required"]').click();
    cy.get('#address-select-country-option-1').click();

    cy.get('[data-testid="register-city"]').type(city);
    cy.get('[data-testid="register-zip"]').type(zipCode);

    cy.get('[data-testid="register-password"]').type(password);
    cy.get('[data-testid="register-confirm-password"]').type(password);

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/api/auth/register`).as('registrationResponse')
    cy.get('[data-testid="Sign Up-OK"]').click();
    cy.wait('@registrationResponse')

}