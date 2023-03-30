
export function enableRotateMode() : void {
    cy.get('.btn-Copy').click();
}

export function nudgeUp() : void {
    cy.get('.btn-Up').click();
}

export function nudgeDown() : void {
    cy.get('.btn-Down').click();
}

export function nudgeRight() : void {
    cy.get('.btn-Right').click();
}

export function nudgeLeft() : void {
    cy.get('.btn-Left').click();
}

export function rotateLeft() : void {
    cy.get('.btn-LeftRotate').click();
}

export function rotateRight() : void {
    cy.get('.btn-RightRotate').click();
}
