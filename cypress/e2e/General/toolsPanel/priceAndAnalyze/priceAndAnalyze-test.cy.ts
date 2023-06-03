describe('Changing quantity', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Price modal is opened and loader is shown', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login();
        cy.openPrice(false);
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div').should('be.visible');
        cy.get('.MuiCircularProgress-svg').should('be.visible');
    })

    it('After loading it shows table with prices', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login();
        cy.openPrice(true);
        cy.get('.Grid').should('be.visible');
    })

    it('Click on “to {country_name(zip)}” -> country and zip modal opens', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login();
        cy.openPrice(true);
        cy.get('#undefined-dialog-content > div > div.ShipVia > div.Select > a').click();
        cy.get('#zip-code-modal > div.MuiDialog-container.MuiDialog-scrollPaper > div').should('be.visible');
    })

    it('Analyzer with messages is shown on right side', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login();
        cy.openPrice(true);
        cy.get('.MuiButton-label').contains('Cancel').click();
        cy.get('.tabButton').contains('Analyzer').should('be.visible');
    })

    it('Quantity changed without errors', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login();
        cy.openPrice(true);
        cy.changeQuantityInPrice('100');
        cy.get('.InputNumber > input').should('have.value', '100')
    })

    it('Quantity changed to 0 without errors', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.login();
        cy.openPrice(true);
        cy.changeQuantityInPrice('0');
        cy.get('.InputNumber > input').should('have.value', '1');
    })

})

