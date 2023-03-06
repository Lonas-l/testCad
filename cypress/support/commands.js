// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-delete-downloads-folder').addCustomCommand();

Cypress.Commands.add('selectAll', () => {
    cy.get('.btn').contains('Edit').click();
    cy.get('.sprite-selectAll').click();
})

Cypress.Commands.add('openSettings', () => {
    cy.get('.btn').contains('Job').click();
    cy.get('.sprite-settings').click();
})


Cypress.Commands.add('login', (url) => {
    cy.visit(url);
    cy.get('span[class="MuiButton-label"]').contains('Sign In').click();
    cy.get('input[name="email"]').type(Cypress.env('USER_EMAIL'))
    cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
    cy.get('span[class=MuiButton-label]').contains('OK').click();
})

Cypress.Commands.add('openPrice', () => {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
    cy.get('.sprite-Ok').click();
    cy.wait('@priceResponse')
})

Cypress.Commands.add('export', (fileExtension) => {

    cy.get('.btn').contains('File').click();
    cy.get('span').contains('Export to').trigger('mouseover');

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/export/${fileExtension}`).as('exportResponse');
    cy.get('a').contains(fileExtension.toUpperCase()).click();

    if(fileExtension === 'dxf') {
        cy.get('.MuiButton-label').contains('Export').click();
    }

    cy.wait('@exportResponse');
})

Cypress.Commands.add('sendFeedback', (email, description) => {
    cy.get('.btn').contains('Help').click();
    cy.get('a').contains('Feedback').click();

    cy.get('#undefined-dialog-content > div > form > div.Email > div > div > input').type(email);
    cy.get('#undefined-dialog-content > div > form > div.Textarea > div > div > textarea:nth-child(1)').type(description);

    cy.get('span[class=MuiButton-label]').contains('Send').click();
})

Cypress.Commands.add('toSharedDesign', (designUrl) => {
    cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/designs/*`).as('shareResponse')
    cy.visit(designUrl);
    cy.wait('@shareResponse')
})

Cypress.Commands.add('login',  (email = Cypress.env('USER_EMAIL'), password = Cypress.env('USER_PASSWORD')) => {
    cy.get('span[class="MuiButton-label"]').contains('Sign In').click();
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('span[class=MuiButton-label]').contains('OK').click();
})

Cypress.Commands.add('checkIfPreviewOpened',  () => {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse')
    cy.get('.sprite-3dPreview').click();
    cy.wait('@previewResponse')
    cy.get('.popup-container').should('be.visible');
})

Cypress.Commands.add('processOrder',  () => {
    cy.wait(1000)
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
    cy.get('.sprite-Ok').click();
    cy.wait('@priceResponse')

    cy.get('.MuiDialogActions-root > :nth-child(1)').click();
    cy.get('.PurchaseOrder').click();

    cy.get('#undefined-dialog-content > div.Right > div:nth-child(2) > label > span > span.MuiIconButton-label > input').click();

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/order`).as('orderResponse')

    cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root').invoke('removeAttr', 'target').click();

    cy.wait('@orderResponse')

    cy.get('.MuiDialogContent-root').contains('Thank you for your order! You will receive an order confirmation email once your order has been processed.').should('be.visible')
})


Cypress.Commands.add('viewCompare', (fileUrl1, fileUrl2) => {
    cy.readFile(fileUrl1).then((fileStr1) => {
        cy.readFile(fileUrl2).then((fileStr2) => {
            const file1Arr = fileStr1.match(/\<View\/?[^>]+>[\s\S]*<\/View>/gm);
            const file2Arr = fileStr2.match(/\<View\/?[^>]+>[\s\S]*<\/View>/gm);
            const isCompare = file1Arr.length == file2Arr.length && file1Arr.every((elFile1) => file2Arr.some((elFile2) => elFile1===elFile2));
            expect(isCompare).to.be.true;
        })
    })
})