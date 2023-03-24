import * as corner from './command/cornerCommand'
import 'cypress-file-upload';

require('cypress-delete-downloads-folder').addCustomCommand();

declare global {
    interface Window {
        app: any;
    }
}

declare global {
    namespace Cypress {
        interface Chainable {
            viewCompare: (fileUrl1 : string, fileUrl2 : string) => void,
            toSharedDesign: (designUrl : string) => void,
            selectAll: () => void,
            openSettings: () => void,
            login: (email? : string, password?: string) => void,
            registration: (name: string, lastName: string, company: string, email: string, phone : string,
                           street: string, city: string, zipCode: string, password: string,) => void,
            openPrice: () => void,
            exportFile: (fileExtension : string) => void,
            downloadDesign: () => void,
            sendFeedback: (email : string, description : string) => void,
            processOrder: () => void,
            isPreviewOpened: () => void,
            openFile: (path: string) => void,
            openFileAndUseSolution: (solution: string, initialDesignUrl: string, fixedDesignUrl: string, downloadedDesignUrl: string) => void,
            changeView: (view : string) => void,
            openSimplifyModal: () => void,
            openConvertSplineToArcModal: () => void,
            openContourModal: () => void,
            openGrooveModal: () => void,
            addGroove: (topDepth : string, width: string, horizontalDepth: string) => void
            scaleElement: (horizontally: string, vertically: string, isProportional? : boolean, isPreserveArcs? : boolean) => void
            confirmationModal: (isConfirm: boolean) => void
            findSimilar: () => void
            checkProjectionFromAllView: (correctPoints : Array<string>) => void
            openFeedbackModal: () => void
            changeZ: (zValue : string) => void
            selectConnected: () => void
            setContourSettings: (value: string, isOutside : boolean, isInside: boolean) => void
            confirmContour : (isWait: boolean) => void
            openDivideModal : () => void
            setDivideSettings : (value : string) => void
            confirmDivide : () => void
            cancelDivide : () => void
            tangent : () => void
            setConvertSplineToArcSettings : (value: string) => void
            confirmConvertSplineToArc : () => void
            mirror : (mode: string) => void
            //Corner
            cornerMath: (expression: string, result: string) => void,
            cornerCancelValue: () => void,
            cornerConfirmValue: () => void,
            cornerNegativeValue: (value: string, mode?: string) => void,
            cornerPositiveValue: (mode: string) => void,
            cornerSymbolValue: (mode?: string) => void,
            checkProjection: (correctPoint : string) => void;
        }
    }
}

export function scaleElement(horizontally: string, vertically: string, isProportional? : boolean, isPreserveArcs? : boolean) : void {
    cy.get(':nth-child(4) > .btn').click();
    cy.get('ul > :nth-child(8)').click();

    if(isProportional == false) {
        cy.get('span').contains('Proportional scaling').click();
    }
    if (isPreserveArcs) {
        cy.get('span').contains('Preserve arcs').click();
    }

    cy.get(':nth-child(1) > .makeStyles-input-10 > input').clear().type(horizontally);
    cy.get(':nth-child(2) > .makeStyles-input-10 > input').clear().type(vertically);


    cy.get('.makeStyles-actions-13 > :nth-child(1)').click();
}

export function confirmationModal(isConfirm: boolean) : void {
    if (isConfirm) {
        cy.get('[style="background-color: rgb(221, 218, 218); box-shadow: rgb(0, 0, 0) 2px 2px 1px; margin: 0px 5px 0px auto;"]').click();
    }
}

export function checkProjection(correctPoint : string) : void {
    cy.wait(50);
    cy.window().then( async win => {
        const workspace = await win.app.workspace.projections;
        const arrProjection: Array<string> = [];
        for (let key in workspace) {
            const extremes = workspace[key].shape.extremum;
            arrProjection.push(extremes.maxX.toFixed(5), extremes.maxY.toFixed(5), extremes.minX.toFixed(5), extremes.minY.toFixed(5));
        }

        const stringProjection: string = arrProjection.join('');
        expect(correctPoint).to.eq(stringProjection);
    })
}

export function checkProjectionFromAllView(correctPoints : Array<string> ) : void {
    const views: Array<string> = [
        '.leftData > :nth-child(2)',
        '.leftData > :nth-child(3)',
        '.leftData > :nth-child(4)',
        '.leftData > :nth-child(5)',
        '.leftData > :nth-child(6)',
        '.leftData > :nth-child(7)'
    ];
    for (let i = 0; i <= correctPoints.length; i++) {
        changeView(views[i]);
        checkProjection(correctPoints[i]);
    }
}

export function changeZ(zValue : string) : void {
    cy.get('#app > div > div.ToolsPanel > div.Left-Tools > div:nth-child(3) > div > input[type=text]').clear().type(zValue);
}

export function selectAll() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('.sprite-selectAll').click();
}

export function selectConnected() : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Select Connected').click();
}

export function tangent() : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Tangent').click();
}

export function findSimilar() : void {
    cy.get('.btn').contains('Edit').click();
    cy.get('a').contains('Find Similar').click();
}

export function setContourSettings(value: string, isOutside : boolean, isInside: boolean) : void {
    cy.get('form > :nth-child(1) > input').clear().type(value);

    if (!isInside) {
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    }
    if (!isOutside) {

        cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').click()
    }
}

export function confirmContour(isWait: boolean) : void {
    if (isWait) {
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/contour`).as('contourResponse')
        cy.get('.MuiDialogActions-root > :nth-child(1)').click();
        cy.wait('@contourResponse')
    } else {
        cy.get('.MuiDialogActions-root > :nth-child(1)').click();
    }
}

export function downloadDesign() : void {
    cy.get('.sprite-Download').click();
}

export function openSettings() : void {
    cy.get('.btn').contains('Job').click();
    cy.get('.sprite-settings').click();
}

export function openSimplifyModal() : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Simplify...').click();
}

export function openConvertSplineToArcModal() : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Convert Splines to Arcs').click();
}

export function openDivideModal() : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Divide').click();
}

export function mirror(mode: string) : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Mirror').trigger('mouseover');

    if (mode == 'horizontally') {
        cy.get('a').contains('Horizontally').click();
    }

    if (mode == 'vertically') {
        cy.get('a').contains('Vertically').click();
    }
}


export function setDivideSettings(value : string) : void {
    cy.get('.Text > input').clear().type(value);
}

export function setConvertSplineToArcSettings(value: string) : void {
    cy.get('.Text > div > input').clear().type(value);
}

export function confirmConvertSplineToArc() : void {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/spline-to-arcs`).as('splineToArcResponse')
    cy.get('.Yes-No-buttons > :nth-child(1)').click();
    cy.wait('@splineToArcResponse')

}

export function confirmDivide() : void {
    cy.get('[style="background-color: rgb(221, 218, 218); box-shadow: rgb(0, 0, 0) 2px 2px 1px; margin: 0px 5px 0px auto;"]').click();
}

export function cancelDivide() : void {
    cy.get('[style="background-color: rgb(221, 218, 218); box-shadow: rgb(0, 0, 0) 2px 2px 1px; margin: 0px auto;"]').click();
}


export function openContourModal() : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Contour').click();
}

export function openGrooveModal() : void {
    cy.get('.sprite-LineMachine').click();
    cy.get('span[class=MuiButton-label]').contains('Detailed').click();
}

export function addGroove(topDepth : string, width: string, horizontalDepth: string) : void {
    cy.get('.groove_data-inputs > :nth-child(1) > input').clear().type(topDepth);
    cy.get('.groove_data-inputs > :nth-child(2) > input').clear().type(width);
    cy.get('.groove_data-inputs > :nth-child(3) > input').clear().type(horizontalDepth);
    cy.get('.groove_control-panel > :nth-child(1)').click();
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

export function openFeedbackModal() : void {
    cy.get('.btn').contains('Help').click();
    cy.get('a').contains('Feedback').click();

}

export function sendFeedback(email : string, description : string) : void {
    cy.openFeedbackModal()
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

export function registration(
    name: string,
    lastName: string,
    company: string,
    email: string,
    phone : string,
    street: string,
    city: string,
    zipCode: string,
    password: string,
) : void {
    cy.get('span[class="MuiButton-label"]').contains('Sign In').click();
    cy.get(':nth-child(1) > .MuiTypography-subtitle2 > .MuiTypography-root').click();

    cy.get('.leftContent > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').focus().type(name);
    cy.get('.leftContent > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').focus().type(lastName);
    cy.get('.leftContent > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').focus().type(company);
    cy.get('.leftContent > :nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').focus().type(email);
    cy.get('.leftContent > :nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').focus().type(phone);

    cy.get('.rightContent > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').focus().type(street);
    cy.get('#address-select-country').click();
    cy.get('#address-select-country-option-0').click();

    cy.get('[style="width: 100%;"] > .MuiFormControl-root > .MuiInputBase-root').click();
    cy.get('#address-select-country-option-1').click();

    cy.get('.rightContent > :nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').focus().type(city);
    cy.get('.rightContent > :nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').focus().type(zipCode);

    cy.get('.containerRegister > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').focus().type(password);
    cy.get('.containerRegister > :nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').focus().type(password);

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/api/auth/register`).as('registrationResponse')
    cy.get('.MuiDialogActions-root > :nth-child(1)').click();
    cy.wait('@registrationResponse')

}
export function isPreviewOpened() : void {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse')
    cy.get('.sprite-3dPreview').click();
    cy.wait('@previewResponse');
    cy.get('.popup-container').should('be.visible');
}

export function processOrder() : void {
    cy.wait(1000)
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse');
    cy.get('.sprite-Ok').click();
    cy.wait('@priceResponse');

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

export function openFileAndUseSolution (solution: string, initialDesignUrl: string, fixedDesignUrl: string, downloadedDesignUrl: string) : void {
    openFile(initialDesignUrl)
    cy.wait(10);
    cy.get('.sprite-3dPreview').click();
    cy.get(`${solution}`).click();
    cy.get('span[class=MuiButton-label]').contains('OK').click();
    cy.downloadDesign();
    cy.viewCompare(downloadedDesignUrl, fixedDesignUrl);
}

export function changeView(view: string) : void {
    cy.wait(100)
    cy.get(view).click();
}

Cypress.Commands.add('selectAll', selectAll)
Cypress.Commands.add('findSimilar', findSimilar)
Cypress.Commands.add('openSettings', openSettings)
Cypress.Commands.add('login', login)
Cypress.Commands.add('registration', registration)
Cypress.Commands.add('openPrice', openPrice)
Cypress.Commands.add('exportFile', exportFile)
Cypress.Commands.add('sendFeedback', sendFeedback)
Cypress.Commands.add('toSharedDesign', toSharedDesign)
Cypress.Commands.add('isPreviewOpened', isPreviewOpened)
Cypress.Commands.add('processOrder', processOrder)
Cypress.Commands.add('viewCompare', viewCompare)
Cypress.Commands.add('openFile', openFile)
Cypress.Commands.add('openFileAndUseSolution', openFileAndUseSolution)
Cypress.Commands.add('checkProjection', checkProjection)
Cypress.Commands.add('changeView', changeView)
Cypress.Commands.add('openConvertSplineToArcModal', openConvertSplineToArcModal)
Cypress.Commands.add('openSimplifyModal', openSimplifyModal)
Cypress.Commands.add('openContourModal', openContourModal)
Cypress.Commands.add('openGrooveModal', openGrooveModal)
Cypress.Commands.add('addGroove', addGroove)
Cypress.Commands.add('scaleElement', scaleElement)
Cypress.Commands.add('confirmationModal', confirmationModal)
Cypress.Commands.add('checkProjectionFromAllView', checkProjectionFromAllView)
Cypress.Commands.add('openFeedbackModal', openFeedbackModal)
Cypress.Commands.add('selectConnected', selectConnected)
Cypress.Commands.add('changeZ', changeZ)
Cypress.Commands.add('setContourSettings', setContourSettings)
Cypress.Commands.add('confirmContour', confirmContour)
Cypress.Commands.add('downloadDesign', downloadDesign)
Cypress.Commands.add('openDivideModal', openDivideModal)
Cypress.Commands.add('setDivideSettings', setDivideSettings)
Cypress.Commands.add('confirmDivide', confirmDivide)
Cypress.Commands.add('cancelDivide', cancelDivide)
Cypress.Commands.add('tangent', tangent)
Cypress.Commands.add('setConvertSplineToArcSettings', setConvertSplineToArcSettings)
Cypress.Commands.add('confirmConvertSplineToArc', confirmConvertSplineToArc)
Cypress.Commands.add('mirror', mirror)

//Corner
Cypress.Commands.add('cornerMath', corner.math)
Cypress.Commands.add('cornerCancelValue', corner.cancelValue)
Cypress.Commands.add('cornerConfirmValue', corner.confirmValue)
Cypress.Commands.add('cornerNegativeValue', corner.negativeValue)
Cypress.Commands.add('cornerPositiveValue', corner.positiveValue)
Cypress.Commands.add('cornerSymbolValue', corner.symbolValue)