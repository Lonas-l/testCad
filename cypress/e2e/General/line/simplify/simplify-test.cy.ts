describe('Simplify Test', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Test negative value ', () => {
        cy.openFile('./SimpleSpline.emsx');
        cy.selectAll();
        cy.openSimplifyModal();
        cy.get('[data-testid="simplify-dinention-field"]').focus().clear().type('-5');
        cy.confirmSimplify();
        cy.get('[data-testid="simplify-dinention-field-error"]').should('be.visible');
    })

    it('Test save value when pressed ok', () => {
        cy.openFile('./SimpleSpline.emsx');
        cy.selectAll();
        cy.openSimplifyModal();
        cy.get('[data-testid="simplify-dinention-field"]').focus().clear().type('5');
        cy.confirmSimplify(true);
        cy.openSimplifyModal();
        cy.get('[data-testid="simplify-dinention-field"]').should('have.value', '5.000"');
    })
 })