describe('Test Specification', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
        cy.openSettings();
    })


    it('Test change and save specification', () => {
        cy.get('[data-testid="settings-auto-select-common"]').select('Precision 2D');
        cy.get('[data-testid="settings-ok"]').click();
        cy.downloadDesign();
        cy.openSettings();
        cy.get('[data-testid="settings-auto-select-common"]').should('have.value','Precision 2D');
    })

    it('Test change and cancel specification', () => {
        cy.get('[data-testid="settings-auto-select-common"]').select('Precision 2D');
        cy.get('[data-testid="settings-cancel"]').click();
        cy.openSettings();
        cy.get('[data-testid="settings-auto-select-common"]').should('have.value','Economical 2D');
    })

    it('Test custom specification', () => {
        cy.get('[data-testid="settings-auto-select-general"]').select('0.254');
        cy.get('[data-testid="settings-auto-select-common"]').should('have.value','Custom');
    })

    it('Test Value Economical 2D' , () => {
        cy.get('[data-testid="settings-auto-select-common"]').select('Economical 2D');

        cy.get('[data-testid="settings-auto-select-general"]').should('have.value','0.762');
        cy.get('[data-testid="settings-auto-select-thickness"]').should('have.value','20');
        cy.get('[data-testid="settings-auto-select-flatness"]').should('have.value','2.54');
        cy.get('[data-testid="settings-auto-select-edge-draft"]').should('have.value','5');
        cy.get(':nth-child(6) > select').should('have.value','25');
        cy.get(':nth-child(7) > select').should('have.value','12.5');
    })

    it('Test Value Precision 2D' , () => {
        cy.get('[data-testid="settings-auto-select-common"]').select('Precision 2D');

        cy.get('[data-testid="settings-auto-select-general"]').should('have.value','0.254');
        cy.get('[data-testid="settings-auto-select-thickness"]').should('have.value','10');
        cy.get('[data-testid="settings-auto-select-flatness"]').should('have.value','1.27');
        cy.get('[data-testid="settings-auto-select-edge-draft"]').should('have.value','5');
        cy.get(':nth-child(6) > select').should('have.value','12.5');
        cy.get(':nth-child(7) > select').should('have.value','3.2');
    })

    it('Test Value Economical 3D' , () => {
        cy.get('[data-testid="settings-auto-select-common"]').select('Economical 3D');

        cy.get('[data-testid="settings-auto-select-general"]').should('have.value','0.508');
        cy.get('[data-testid="settings-auto-select-thickness"]').should('have.value','0');
        cy.get('[data-testid="settings-auto-select-flatness"]').should('have.value','0.508');
        cy.get('[data-testid="settings-auto-select-edge-draft"]').should('have.value','2');
        cy.get(':nth-child(6) > select').should('have.value','3.2');
        cy.get(':nth-child(7) > select').should('have.value','3.2');
    })

    it('Test Value Precision 3D' , () => {
        cy.get('[data-testid="settings-auto-select-common"]').select('Precision 3D');

        cy.get('[data-testid="settings-auto-select-general"]').should('have.value','0.127');
        cy.get('[data-testid="settings-auto-select-thickness"]').should('have.value','0');
        cy.get('[data-testid="settings-auto-select-flatness"]').should('have.value','0.127');
        cy.get('[data-testid="settings-auto-select-edge-draft"]').should('have.value','0');
        cy.get(':nth-child(6) > select').should('have.value','1.6');
        cy.get(':nth-child(7) > select').should('have.value','1.6');
    })

})

describe('Specifications: Bend', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('We can change value in dropdown', () => {
        cy.openFile('./Simple_Bend_Line.emsx');
        cy.openSettings();
        cy.openBendTab();
        cy.get('[data-testid="settings-bend-specs-select"]').select('0.063"');
        cy.get('[data-testid="settings-bend-specs-select"]').should('have.value','1.5875');
    })

    it('Value saved when pressed Ok', () => {
        cy.openFile('./Simple_Bend_Line.emsx');
        cy.openSettings();
        cy.openBendTab();
        cy.get('[data-testid="settings-bend-specs-select"]').select('0.063"');
        cy.get('[data-testid="settings-ok"]').click();
        cy.downloadDesign();
        cy.openSettings();
        cy.openBendTab();
        cy.get('[data-testid="settings-bend-specs-select"]').should('have.value','1.5875');
    })

    it('Value is not saved when pressed Cancel', () => {
        cy.openFile('./Simple_Bend_Line.emsx');
        cy.openSettings();
        cy.openBendTab();
        cy.get('[data-testid="settings-bend-specs-select"]').select('0.063"');
        cy.get('[data-testid="settings-cancel"]').click();
        cy.downloadDesign();
        cy.openSettings();
        cy.openBendTab();
        cy.get('[data-testid="settings-bend-specs-select"]').should('have.value','0.79375');
    })
})


describe('Test Address', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Validation all field', () => {
        cy.openSettings();
        cy.openAddressTab();
        cy.get('[data-testid="settings-ok"]').click();
        cy.get('[data-testid="settings-ok"]').should('be.disabled');
    })

    it('Save Address Data', () => {
        cy.login();
        cy.openSettings();
        cy.openAddressTab();

        cy.get('[data-testid="settings-address-first-name"]').clear().type(String(Math.random()));
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/api/auth/me`).as('meResponse');
        cy.get('[data-testid="settings-ok"]').click();
        cy.wait('@meResponse')

        cy.get('[data-testid="info-message"]').contains('Updating successfully completed.').should('be.visible')

    })

    it('Checking dynamic address change in summary tab', ()=> {
        cy.openSettings();
        cy.openAddressTab();

        cy.get('[data-testid="settings-address-first-name"]').type('name');
        cy.get('[data-testid="settings-address-last-name"]').type('lastname');
        cy.get('[data-testid="settings-address-business-name"]').type('company');
        cy.get('[data-testid="settings-address-email"]').type('email@qwe.qw');

        cy.openSummaryTab();

        cy.get('[data-testid="setting-summary-value-1"]').contains('name lastname company');
        cy.get('[data-testid="setting-summary-value-2"]').contains('email@qwe.qw')

    })
})