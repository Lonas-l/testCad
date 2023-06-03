export function openToolsDropdown() : void {
    cy.get(`[data-testid="desktop-show-dropdown-Tools"]`).click();
}

export function openSheetMetalBoxModal() : void {
    cy.get(`[data-testid="desktop-menu-item-sheet-metal-box"]`).click();
}

export function openSpurGearModal() : void {
    cy.get(`[data-testid="desktop-menu-item-spur-gear"]`).click();
}

export function confirmWizard() : void {
    cy.get(`[data-testid="wizards-ok"]`).click();
}