describe('Line Machine', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Reset buttons works correctly', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
    })

    it('Switch between left tabs works correctly', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();

        cy.machineModalSwitchTab('.items-list > :nth-child(1)');
        cy.get('[data-testid="line-machine-Auto"]').should('have.class', 'active');

        cy.machineModalSwitchTab('[data-testid="line-machine-Thread"]');
        cy.get('[data-testid="line-machine-Thread"]').should('have.class', 'active');

        cy.machineModalSwitchTab('[data-testid="line-machine-Bend"]');
        cy.get('[data-testid="line-machine-Bend"]').should('have.class', 'active');

        cy.machineModalSwitchTab('[data-testid="line-machine-Tolerance"]');
        cy.get('[data-testid="line-machine-Tolerance"]').should('have.class', 'active');

        cy.machineModalSwitchTab('[data-testid="line-machine-Comment/Construction"]');
        cy.get('[data-testid="line-machine-Comment/Construction"]').should('have.class', 'active');

        cy.machineModalSwitchTab('[data-testid="line-machine-Comment to Machinist"]');
        cy.get('[data-testid="line-machine-Comment to Machinist"]').should('have.class', 'active');
    })

    it('Switch between left tabs works correctly', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
    })

})