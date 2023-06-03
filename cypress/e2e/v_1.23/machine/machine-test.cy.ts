describe('TR #201900 | Critical error | Line | Machine', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('After confirm thread in Machine modal for revolve projection i get an error', () => {
        cy.openFile('../e2e/v_1.23/machine/designs/TR201900/Line_Machine.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.machineModalSwitchTab('line-machine-Thread');
        cy.confirmMachine();
        cy.get('[data-testid="info-message"]').should('have.text', 'Use only Auto line type for revolve base arc.')
    })

    it('After added groove in Machine modal for revolve projection i get an error', () => {
        cy.openFile('../e2e/v_1.23/machine/designs/TR201900/Line_Machine.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.openGrooveModal();
        cy.addGroove('1', '1', '1');
        cy.confirmGroove();
        cy.confirmMachine();
    })
})

describe('TR #201274 | Critical error | Line | Machine', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('If in line machine modal press Ctrl+R, we get an error', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.realPress(['Meta', 'R'])
    })

    it('Hotkeys stop working after confirming the settings in the machine modal', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.openGrooveModal();
        cy.addGroove('1', '1', '1');
        cy.confirmGroove();
        cy.confirmMachine();
        cy.open3DPreviewViaShortcut();
        cy.isPreviewOpened();
    })

})