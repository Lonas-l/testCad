describe('Calculate price with order', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    it('test simple rectangle', () => {
        cy.openFile('simpleRectangle.emsx');
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
