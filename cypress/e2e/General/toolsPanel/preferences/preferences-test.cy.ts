describe('Preferences test', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
         cy.openPreferencesModal();
     });

    it('Switch between Inches and Millimeters', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.get('span').contains('Millimeters').click();
        cy.get('.preferencesActionButtons > :nth-child(1)').click();
        cy.selectAll();
        cy.get('.sprite-mm').should('be.visible');
        cy.checkDimensionInTheField('.Left-Tools > :nth-child(2) > input', 'mm');
        cy.checkDimensionInTheField(':nth-child(3) > input', 'mm');
        cy.checkDimensionInTheField('.InputSelect > input', 'mm');

        cy.openPreferencesModal();
        cy.get('span').contains('Inches').click();
        cy.get('.preferencesActionButtons > :nth-child(1)').click();
        cy.selectAll();
        cy.get('.sprite-inch').should('be.visible');
        cy.checkDimensionInTheField('.Left-Tools > :nth-child(2) > input', '"');
        cy.checkDimensionInTheField(':nth-child(3) > input', '"');
        cy.checkDimensionInTheField('.InputSelect > input', '"');

    });

    it('Cancel button does not apply any changes', () => {
        cy.get('#undefined-dialog-content > div > div:nth-child(2) > div > form > div > input[type=text]').clear().type('1000');
        cy.get('.preferencesActionButtons > :nth-child(2)').click();
        cy.openPreferencesModal();
        cy.get('#undefined-dialog-content > div > div:nth-child(2) > div > form > div > input[type=text]').should('have.value', 8);
    });


 });

describe('Preferences test', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
        cy.openPreferencesModal();
    });

    it('Check minimum PPI value – 70', () => {
        cy.openCalibrateModal();
        cy.get('.MuiInputBase-input').focus().clear().type('22');
        cy.get('.calibrateActionButtons > :nth-child(1)').click();
        cy.openPreferencesModal();
        cy.openCalibrateModal();
        cy.get('.MuiInputBase-input').should('have.value', '70');
    });

    it('Check cancel button not saving value', () => {
        cy.openCalibrateModal();
        cy.get('.MuiInputBase-input').focus().clear().type('100');
        cy.get('.calibrateActionButtons > :nth-child(2)').click();
        cy.openPreferencesModal();
        cy.openCalibrateModal();
        cy.get('.MuiInputBase-input').should('have.value', '91');
    });

});