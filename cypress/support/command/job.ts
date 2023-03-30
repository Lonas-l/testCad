export function openSettings() : void {
    cy.get('[data-testid="desktop-show-dropdown-Job"]').click();
    cy.get('[data-testid="desktop-menu-item-settings"]').click();
}

export function openBendTab() : void {
    cy.get('[data-testid="settings-specification-bend"]').click();
}

export function openAddressTab() : void {
    cy.get('[data-testid="settings-address"]').click();
}

export function openSummaryTab() : void {
    cy.get('[data-testid="settings-summary"]').click();
}



