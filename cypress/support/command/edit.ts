
export function cut() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('a').contains('Cut').click();
}

export function copy() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('a').contains('Copy').click();
}

export function paste() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('a').contains('Paste').click();
}

export function undo() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('a').contains('Undo').click();
}

export function redo() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('a').contains('Redo').click();
}

export function selectAll() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('.sprite-selectAll').click();
}

export function findSimilar() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('a').contains('Find Similar').click();
}