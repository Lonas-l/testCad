import {cancelDivide} from "../../../../support/commands";

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
        cy.get('.dataContainer').should('have.text', '100 lines selected')
    });

    it("Value is saved, when pressed Ok", () => {
        cy.openFile('Simple_Line.emsx');
        cy.selectAll();
        cy.openDivideModal();
        cy.setDivideSettings('100');
        cy.confirmDivide();
        cy.openDivideModal();
        cy.get('.Text > input').should('have.value', 100)
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
        cy.get('.Text > input').should('have.value', 50)
    });
})
