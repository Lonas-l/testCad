
export function deleteSelected() : void {
    cy.get('.sprite-Cancel').click();
}

export function intersectSelected() : void {
    cy.get('.sprite-Intersect').click();
}

export function changeDimension() : void {
    cy.get('.sprite-inch').click();
}