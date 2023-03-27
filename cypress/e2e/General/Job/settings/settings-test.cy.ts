describe('Test Specification', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
        cy.openSettings();
    })


    it('Test change and save specification', () => {
        cy.get('#undefined-dialog-content > div > div.Content > div > fieldset:nth-child(1) > select').select('Precision 2D');
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.downloadDesign();
        cy.openSettings();
        cy.get('#undefined-dialog-content > div > div.Content > div > fieldset:nth-child(1) > select').should('have.value','Precision 2D');
    })

    it('Test change and cancel specification', () => {
        cy.get('#undefined-dialog-content > div > div.Content > div > fieldset:nth-child(1) > select').select('Precision 2D');
        cy.get('span[class=MuiButton-label]').contains('Cancel').click();
        cy.openSettings();
        cy.get('#undefined-dialog-content > div > div.Content > div > fieldset:nth-child(1) > select').should('have.value','Economical 2D');
    })

    it('Test custom specification', () => {
        cy.get(':nth-child(2) > select').select('0.254');
        cy.get(':nth-child(1) > select').should('have.value','Custom');
    })

    it('Test Value Economical 2D' , () => {
        cy.get(':nth-child(1) > select').select('Economical 2D');

        cy.get(':nth-child(2) > select').should('have.value','0.762');
        cy.get(':nth-child(3) > select').should('have.value','20');
        cy.get(':nth-child(4) > select').should('have.value','2.54');
        cy.get(':nth-child(5) > select').should('have.value','5');
        cy.get(':nth-child(6) > select').should('have.value','25');
        cy.get(':nth-child(7) > select').should('have.value','12.5');
    })

    it('Test Value Precision 2D' , () => {
        cy.get(':nth-child(1) > select').select('Precision 2D');

        cy.get(':nth-child(2) > select').should('have.value','0.254');
        cy.get(':nth-child(3) > select').should('have.value','10');
        cy.get(':nth-child(4) > select').should('have.value','1.27');
        cy.get(':nth-child(5) > select').should('have.value','5');
        cy.get(':nth-child(6) > select').should('have.value','12.5');
        cy.get(':nth-child(7) > select').should('have.value','3.2');
    })

    it('Test Value Economical 3D' , () => {
        cy.get(':nth-child(1) > select').select('Economical 3D');

        cy.get(':nth-child(2) > select').should('have.value','0.508');
        cy.get(':nth-child(3) > select').should('have.value','0');
        cy.get(':nth-child(4) > select').should('have.value','0.508');
        cy.get(':nth-child(5) > select').should('have.value','2');
        cy.get(':nth-child(6) > select').should('have.value','3.2');
        cy.get(':nth-child(7) > select').should('have.value','3.2');
    })

    it('Test Value Precision 3D' , () => {
        cy.get(':nth-child(1) > select').select('Precision 3D');

        cy.get(':nth-child(2) > select').should('have.value','0.127');
        cy.get(':nth-child(3) > select').should('have.value','0');
        cy.get(':nth-child(4) > select').should('have.value','0.127');
        cy.get(':nth-child(5) > select').should('have.value','0');
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
        cy.get(':nth-child(1) > .settingTab').click();
        cy.get('select').select('0.063"')
        cy.get('select').should('have.value','1.5875');
    })

    it('Value saved when pressed Ok', () => {
        cy.openFile('./Simple_Bend_Line.emsx');
        cy.openSettings();
        cy.get(':nth-child(1) > .settingTab').click();
        cy.get('select').select('0.063"');
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.downloadDesign();
        cy.openSettings();
        cy.get(':nth-child(1) > .settingTab').click();
        cy.get('select').should('have.value','1.5875');
    })

    it('Value is not saved when pressed Cancel', () => {
        cy.openFile('./Simple_Bend_Line.emsx');
        cy.openSettings();
        cy.get(':nth-child(1) > .settingTab').click();
        cy.get('select').select('0.063"');
        cy.get('span[class=MuiButton-label]').contains('Cancel').click();
        cy.downloadDesign();
        cy.openSettings();
        cy.get(':nth-child(1) > .settingTab').click();
        cy.get('select').should('have.value','0.79375');
    })
})


describe('Test Address', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Validation all field', () => {
        cy.openSettings();
        cy.get('.settingTab').contains('Address').click();
        cy.get('span[class=MuiButton-label]').contains('OK').click();
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.Mui-disabled.Mui-disabled').should('be.disabled');
    })

    it('Save Address Data', () => {
        cy.login()
        cy.openSettings();
        cy.get('.settingTab').contains('Address').click();

        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear().type(String(Math.random()));

        cy.intercept('POST', `${Cypress.env('BACK_URL')}/api/auth/me`).as('meResponse')

        cy.get('span[class=MuiButton-label]').contains('OK').click();

        cy.wait('@meResponse')

        cy.get('.MuiDialogContent-root').contains('Updating successfully completed.').should('be.visible')

    })

    it('Checking dynamic address change in summary tab', ()=> {
        cy.openSettings();
        cy.get('.settingTab').contains('Address').click();

        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('name');
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('lastname');
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('company');

        cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('email@qwe.qw');

        cy.get('.settingTab').contains('Summary').click();

        cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('name lastname company')
        cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('email@qwe.qw')

    })
})