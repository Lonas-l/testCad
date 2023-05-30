
export function openFeedbackModal() : void {
    cy.get('[data-testid="desktop-show-dropdown-Help"]').click();
    cy.get('[data-testid="desktop-menu-item-feedback"]').click();
}

export function openTechSupportModal() : void {
    cy.get('[data-testid="desktop-show-dropdown-Help"]').click();
    cy.get('[data-testid="desktop-menu-item-tech-support"]').click();
}

export function sendFeedback(email : string, description : string) : void {
    cy.get('[data-testid="tech-support-reply-to"]').type(email);
    cy.get('[data-testid="tech-support-inquiry"]').type(description);
    cy.get('[data-testid="tech-support-ok"]').click();
}