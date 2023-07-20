describe('Divide test', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it("Positive devide line on 100 parts", () => {
        cy.openFile('Simple_Line.emsx');
        cy.selectAll();
        cy.openDivideModal();
        cy.setDivideSettings('100');
        cy.confirmDivide();
        cy.selectAll();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '100 lines selected')
    });

    it("Value is saved, when pressed Ok", () => {
        cy.openFile('Simple_Line.emsx');
        cy.selectAll();
        cy.openDivideModal();
        cy.setDivideSettings('100');
        cy.confirmDivide();
        cy.openDivideModal();
        cy.get('[data-testid="divide-input"]').should('have.value', 100)
    });

    it("Value is not saved, when pressed cancel", () => {
        cy.openFile('Simple_Line.emsx');
        cy.selectAll();
        cy.openDivideModal();
        cy.setDivideSettings('50');
        cy.confirmDivide();
        cy.openDivideModal();
        cy.setDivideSettings('100');
        cy.cancelDivide();
        cy.openDivideModal();
        cy.get('[data-testid="divide-input"]').should('have.value', 50)
    });

    it("After divide projection, need popup with error", () => {
        cy.openFile('SimpleCircle.emsx');
        cy.changeView('bot-panel-Bottom-view');
        cy.selectAll();
        cy.openDivideModal();
        cy.get('[data-testid="info-message"]').should('have.text', 'This action is not permitted for a projection.')
    });

    it("After divide two or more lines, need popup with error", () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.selectAll();
        cy.openDivideModal();
        cy.get('[data-testid="info-message"]').should('have.text', 'Please select only one line to perform this command.')
    });

    it("Enter negative or zero value in divide field, error should appear", () => {
        cy.openFile('Simple_Line.emsx');
        cy.selectAll();
        cy.openDivideModal();
        cy.setDivideSettings('0');
        cy.confirmDivide();
        cy.get('[data-testid="divide-input-error"]').should('be.visible');
        cy.setDivideSettings('-5');
        cy.confirmDivide();
        cy.get('[data-testid="divide-input-error"]').should('be.visible');
    });

    it("Enter negative or zero value in divide field, error should appear", () => {
        cy.openFile('Simple_Line.emsx');
        cy.selectAll();
        cy.openDivideModal();
        cy.setDivideSettings('5.999999999999999999');
        cy.confirmDivide();
        cy.get('[data-testid="divide-input-error"]').should('be.visible');
    });

})
