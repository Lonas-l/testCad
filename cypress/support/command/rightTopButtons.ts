
export function openQuantityModal() : void {
    cy.get(':nth-child(4) > .btn-Material').click();
}

export function changeQuantityInModal(value : string) : void {
    cy.get('.Text > input').clear().type(value);
    cy.get('button').contains('Ok').click();
}