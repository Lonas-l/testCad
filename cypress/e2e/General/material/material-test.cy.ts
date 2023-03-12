
describe('Material', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('Material test', () => {
        cy.get('button[name = Material]').click();
        cy.get('li[value="CNC Metal"]').realHover();
        cy.get('a').contains('Aluminum 1100 H14').click();
        cy.get('button[name = Material]').contains('Aluminum 1100 H14')
    })

    it('Finish test', () => {
        cy.get('button[name = Finish]').click();
        cy.get('li[value="Barrel"]').realHover();
        cy.get('a').contains('Nickel, Electroless .0005" min').click();
        cy.get('button[name = Finish]').contains('Nickel, Electroless .0005" min')
    })
})