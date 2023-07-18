describe('Selects Rectangle Drawing Tool Shortcuts', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Icon is active', () => {
        cy.get('body').type('{[}');
        cy.get('[data-testid="toolbar-Rectangle"]').should('have.class', 'active')
    })
})

describe('Intersect Shortcuts', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Popup appears', () => {
        cy.get('body').type('{control+i}');
        cy.get('[data-testid="info-message"]').should('contain', 'For intersection you must select an element.');
    })
})

describe('Line Machine Shortcuts', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Popup appears', () => {
        cy.get('body').realClick().realPress('F5');
        cy.get('[data-testId="Machine-dialog"]').should('be.visible');
    })
})