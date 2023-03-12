export function math(expression: string, result: string) : void {
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type(expression);
    cy.get('.ImageBlock').click();
    cy.get("#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]").should("have.value", `${result}"`);
}

export function cancelValue() : void {
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type('1');
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/corner`).as('cornerResponse')
    cy.get('span[class=MuiButton-label]').contains('OK').click();
    cy.wait('@cornerResponse')
    cy.get('.sprite-CornerTool').click();
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type('999');
    cy.get('span[class=MuiButton-label]').contains('Cancel').click();
    cy.get('.sprite-CornerTool').click();
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').should('have.value', '1.000"')
}

export function confirmValue() : void {
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type('1');
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/corner`).as('cornerResponse')
    cy.get('span[class=MuiButton-label]').contains('OK').click();
    cy.wait('@cornerResponse')
    cy.get('.sprite-CornerTool').click();
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').should('have.value', '1.000"')
}

export function negativeValue(value: string, mode? : string) : void {
    cy.selectAll();
    cy.get('.sprite-CornerTool').click();
    if (mode === 'chamfer') cy.get('.MuiTypography-root').contains('Chamfer').click();
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type(value);
    cy.get('.LeftBlock').contains('Show preview').click()
    cy.get('.MuiDialogContent-root').contains('Error: You have specified zero or negative round radius. Please enter a positive value.').should('be.visible')
}

export function positiveValue(mode: string) : void {
    cy.selectAll();
    cy.get('.sprite-CornerTool').click();
    if (mode === 'chamfer') cy.get('.MuiTypography-root').contains('Chamfer').click();
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type('1');
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/corner`).as('cornerResponse')
    cy.get('span[class=MuiButton-label]').contains('OK').click();
    cy.wait('@cornerResponse')
    cy.get('.sprite-Download').click();
    let fileName = mode == 'round' ? 'cypress/designs/CornerRoundPositive.emsx' : 'cypress/designs/CornerChamferPositive.emsx';
    cy.viewCompare('cypress/downloads/Untitled.emsx', fileName)
}

export function symbolValue(mode? : string) : void {
    cy.selectAll();
    cy.get('.sprite-CornerTool').click();
    if (mode === 'chamfer') cy.get('.MuiTypography-root').contains('Chamfer').click();
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type('1');
    cy.get('.LeftBlock').contains('Show preview').click()
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').clear().type('wqeqwewqe');
    cy.get('.ImageBlock').click();
    cy.get('#corner-dialog-content > div > form > div > div.LeftBlock > div > input[type=text]').should('have.value', '1.000"')
}


