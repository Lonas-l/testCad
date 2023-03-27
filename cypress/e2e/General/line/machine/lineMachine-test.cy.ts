describe('Line Machine', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('line machine is opened without errors', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
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
        cy.get('.items-list > :nth-child(1)').should('have.class', 'active');

        cy.machineModalSwitchTab('.items-list > :nth-child(2)');
        cy.get('.items-list > :nth-child(2)').should('have.class', 'active');

        cy.machineModalSwitchTab('.items-list > :nth-child(3)');
        cy.get('.items-list > :nth-child(3)').should('have.class', 'active');

        cy.machineModalSwitchTab('.items-list > :nth-child(4)');
        cy.get('.items-list > :nth-child(4)').should('have.class', 'active');

        cy.machineModalSwitchTab('.items-list > :nth-child(5)');
        cy.get('.items-list > :nth-child(5)').should('have.class', 'active');

        cy.machineModalSwitchTab('.items-list > :nth-child(6)');
        cy.get('.items-list > :nth-child(6)').should('have.class', 'active');
    })
    it('Switch between left tabs works correctly', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
        // cy.setNearEdgeSettings({mode: ''});
        // cy.get('[style="padding: 10px;"] > .MuiButtonBase-root').click();
        //
        // cy.get(':nth-child(2) > .wrapper > .InputsWithPreview > .inputs > .InputSelect > input').should('have.value', '90.000°')


    })

})