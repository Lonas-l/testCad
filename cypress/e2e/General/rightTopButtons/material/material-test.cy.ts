
describe('Material', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('Material test', () => {
        cy.get('[data-testid="desktop-material"]').click();
        cy.get('li[value="CNC Metal"]').realHover();
        cy.get('a').contains('Aluminum 1100 H14').click();
        cy.get('[data-testid="desktop-material"]').contains('Aluminum 1100 H14')
    })

    it('Finish test', () => {
        cy.get('[data-testid="desktop-Select-Finish"]').click();
        cy.get('li[value="Barrel"]').realHover();
        cy.get('a').contains('Nickel, Electroless .0005" min').click();
        cy.get('#app > div > div.UpMenu > div > div.RightButtons > div:nth-child(2) > button').contains('Nickel, Electroless .0005" min')
    })
})