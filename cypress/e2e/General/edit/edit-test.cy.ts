import {selectAll} from "../../../support/commands";

describe('Edit', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('Test Cut', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.cut();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '0 lines')
    })

    it('Test Paste', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.cut();
        cy.paste();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '4 lines selected')
    })

    it('Test Copy and Paste', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.copy();
        cy.paste();
        cy.selectAll();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '8 lines selected')
    })

    it('Test undo', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.copy();
        cy.paste();
        cy.undo();
        selectAll();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '4 lines selected')
    })

    it('Test redo', () => {
        cy.openFile('./SimpleRectangle.emsx');
        cy.selectAll();
        cy.copy();
        cy.paste();
        cy.undo();
        cy.redo();
        selectAll();
        cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '8 lines selected')
    })

})