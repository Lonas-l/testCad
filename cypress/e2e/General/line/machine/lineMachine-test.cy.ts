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

        cy.machineModalSwitchTab('line-machine-Auto');
        cy.get('[data-testId="line-machine-Auto"]').should('have.class', 'active');

        cy.machineModalSwitchTab('line-machine-Thread');
        cy.get('[data-testId="line-machine-Thread"]').should('have.class', 'active');

        cy.machineModalSwitchTab('line-machine-Bend');
        cy.get('[data-testId="line-machine-Bend"]').should('have.class', 'active');

        cy.machineModalSwitchTab('line-machine-Tolerance');
        cy.get('[data-testId="line-machine-Tolerance"]').should('have.class', 'active');

        cy.machineModalSwitchTab('line-machine-Comment/Construction');
        cy.get('[data-testId="line-machine-Comment/Construction"]').should('have.class', 'active');

        cy.machineModalSwitchTab('line-machine-Comment to Machinist');
        cy.get('[data-testId="line-machine-Comment to Machinist"]').should('have.class', 'active');
    })

    it('Selected line should highlight in line machine modal', () => {
        cy.openFile('./All_Line_Types.emsx');
        cy.selectAll();
        cy.openMachineModal();

        cy.get('[data-testId="line-machine-Auto"]').should('have.attr', 'style', 'font-weight: bold;');
        cy.get('[data-testId="line-machine-Thread"]').should('have.attr', 'style', 'font-weight: bold;');
        cy.get('[data-testId="line-machine-Tolerance"]').should('have.attr', 'style', 'font-weight: bold;');
        cy.get('[data-testId="line-machine-Comment/Construction"]').should('have.attr', 'style', 'font-weight: bold;');
        cy.get('[data-testId="line-machine-Comment to Machinist"]').should('have.attr', 'style', 'font-weight: bold;');

        cy.openFile('./Simple_Bend_Line.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.get('[data-testId="line-machine-Bend"]').should('have.attr', 'style', 'font-weight: bold;');
    })

})