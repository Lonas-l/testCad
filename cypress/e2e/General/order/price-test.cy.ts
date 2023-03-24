describe('Calculate price with order', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    it('test simple rectangle', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login()
        cy.processOrder();
    })

    it('test complex design', () => {
        cy.openFile('./price/complexDesign.emsx');
        cy.login()
        cy.processOrder();
    })

    it('test simple circle', () => {
        cy.openFile('./price/simpleCircle.emsx');
        cy.login()
        cy.processOrder();
    })
})

describe('Changing quantity', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Quantity changed without errors', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login()
        cy.wait(1000)
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
        cy.get('.sprite-Ok').click();
        cy.wait('@priceResponse')
        cy.get('.InputNumber > input').clear().type('100');
        if (!Cypress.isBrowser('firefox')) {
            cy.realPress('Tab');
        }
        if (Cypress.isBrowser('firefox')) {
            cy.wait(3000);
        }
        cy.get('.InputNumber > input').should('have.value', '100')
    })

    it('Quantity changed to 0 without errors', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login()
        cy.wait(1000)
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
        cy.get('.sprite-Ok').click();
        cy.wait('@priceResponse')
        cy.get('.InputNumber > input').clear().type('0');
        if (!Cypress.isBrowser('firefox')) {
            cy.realPress('Tab');
        }
        if (Cypress.isBrowser('firefox')) {
            cy.wait(3000);
        }

        cy.get('.InputNumber > input').should('have.value', '1')
    })

})

