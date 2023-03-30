
export function openPrice(isWait = true ) {
    cy.wait(1000);
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
    cy.get('.sprite-Ok').click();
    if (isWait) {
        cy.wait('@priceResponse')
    }
}

export function changeQuantityInPrice(quantity: string) {
    cy.get('.InputNumber > input').clear().type(quantity);
    if (!Cypress.isBrowser('firefox')) {
        cy.realPress('Tab');
    }
    if (Cypress.isBrowser('firefox')) {
        cy.wait(3000);
    }
}


export function processOrder() : void {

    cy.openPrice(true);

    cy.get('.MuiDialogActions-root > :nth-child(1)').click();
    cy.get('.PurchaseOrder').click();

    cy.get('#undefined-dialog-content > div.Right > div:nth-child(2) > label > span > span.MuiIconButton-label > input').click();

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/order`).as('orderResponse')

    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
    })

    cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root').invoke('removeAttr', 'target').click();

    cy.wait('@orderResponse')
    cy.get('@windowOpen').should('be.called');

    cy.get('.MuiDialogContent-root').contains('Thank you for your order! You will receive an order confirmation email once your order has been processed.').should('be.visible')
}