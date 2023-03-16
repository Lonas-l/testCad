import * as corner from './command/cornerCommand'
import 'cypress-file-upload';

require('cypress-delete-downloads-folder').addCustomCommand();

declare global {
    namespace Cypress {
        interface Chainable {
            viewCompare: (fileUrl1 : string, fileUrl2 : string) => void,
            toSharedDesign: (designUrl : string) => void,
            selectAll: () => void,
            openSettings: () => void,
            login: (email? : string, password?: string) => void,
            openPrice: () => void,
            exportFile: (fileExtension : string) => void,
            sendFeedback: (email : string, description : string) => void,
            processOrder: () => void,
            isPreviewOpened: () => void,
            openFile: (path: string) => void,

            //Corner
            cornerMath: (expression: string, result: string) => void,
            cornerCancelValue: () => void,
            cornerConfirmValue: () => void,
            cornerNegativeValue: (value: string, mode?: string) => void,
            cornerPositiveValue: (mode: string) => void,
            cornerSymbolValue: (mode?: string) => void,
        }
    }
}

export function selectAll() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('.sprite-selectAll').click();
}

export function openSettings() : void {
    cy.get('.btn').contains('Job').click();
    cy.get('.sprite-settings').click();
}

export function openPrice() {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
    cy.get('.sprite-Ok').click();
    cy.wait('@priceResponse')
}

export function exportFile(fileExtension : string) : void {

    cy.get('.btn').contains('File').click();
    cy.get('span').contains('Export to').trigger('mouseover');

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/export/${fileExtension}`).as('exportResponse');
    cy.get('a').contains(fileExtension.toUpperCase()).click();

    if(fileExtension === 'dxf') {
        cy.get('.MuiButton-label').contains('Export').click();
    }

    cy.wait('@exportResponse');
}

export function sendFeedback(email : string, description : string) : void {
    cy.get('.btn').contains('Help').click();
    cy.get('a').contains('Feedback').click();

    cy.get('#undefined-dialog-content > div > form > div.Email > div > div > input').type(email);
    cy.get('#undefined-dialog-content > div > form > div.Textarea > div > div > textarea:nth-child(1)').type(description);

    cy.get('span[class=MuiButton-label]').contains('Send').click();

}

export function toSharedDesign(designUrl : string) : void {
    cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/designs/*`).as('shareResponse');
    cy.visit(designUrl);
    cy.wait('@shareResponse');
}

export function login(email : string = Cypress.env('USER_EMAIL') , password : string = Cypress.env('USER_PASSWORD')) : void {
    cy.get('span[class="MuiButton-label"]').contains('Sign In').click();
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('span[class=MuiButton-label]').contains('OK').click();
}

export function isPreviewOpened() : void {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse')
    cy.get('.sprite-3dPreview').click();
    cy.wait('@previewResponse')
    cy.get('.popup-container').should('be.visible');
}

export function processOrder() : void {
    cy.wait(1000)
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
    cy.get('.sprite-Ok').click();
    cy.wait('@priceResponse')

    cy.get('.MuiDialogActions-root > :nth-child(1)').click();
    cy.get('.PurchaseOrder').click();

    cy.get('#undefined-dialog-content > div.Right > div:nth-child(2) > label > span > span.MuiIconButton-label > input').click();

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/order`).as('orderResponse')

    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen')
    })

    cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root').invoke('removeAttr', 'target').click();

    cy.wait('@orderResponse')
    cy.get('@windowOpen').should('be.called');

    cy.get('.MuiDialogContent-root').contains('Thank you for your order! You will receive an order confirmation email once your order has been processed.').should('be.visible')
}

export function viewCompare(fileUrl1 : string, fileUrl2 : string) : void {
    cy.readFile(fileUrl1).then((fileStr1) => {
        cy.readFile(fileUrl2).then((fileStr2) => {

            const file1Arr = fileStr1.match(/\<View\/?[^>]+>[\s\S]*<\/View>/gm);
            const file2Arr = fileStr2.match(/\<View\/?[^>]+>[\s\S]*<\/View>/gm);

            const isCompare = file1Arr.length === file2Arr.length &&
                file1Arr.every((elFile1) =>
                    file2Arr.some((elFile2) =>
                        elFile1.replace(/\s/g, '')===elFile2.replace(/\s/g, '')));

            expect(isCompare).to.be.true;
        })
    })
}

export function openFile(path: string) : void {
    cy.get('canvas').attachFile(path, { subjectType: 'drag-n-drop' });
}



Cypress.Commands.add('selectAll', selectAll)
Cypress.Commands.add('openSettings', openSettings)
Cypress.Commands.add('login', login)
Cypress.Commands.add('openPrice', openPrice)
Cypress.Commands.add('exportFile', exportFile)
Cypress.Commands.add('sendFeedback', sendFeedback)
Cypress.Commands.add('toSharedDesign', toSharedDesign)
Cypress.Commands.add('isPreviewOpened', isPreviewOpened)
Cypress.Commands.add('processOrder', processOrder)
Cypress.Commands.add('viewCompare', viewCompare)
Cypress.Commands.add('openFile', openFile)

//Corner
Cypress.Commands.add('cornerMath', corner.math)
Cypress.Commands.add('cornerCancelValue', corner.cancelValue)
Cypress.Commands.add('cornerConfirmValue', corner.confirmValue)
Cypress.Commands.add('cornerNegativeValue', corner.negativeValue)
Cypress.Commands.add('cornerPositiveValue', corner.positiveValue)
Cypress.Commands.add('cornerSymbolValue', corner.symbolValue)