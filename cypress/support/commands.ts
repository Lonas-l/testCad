import * as corner from './command/cornerCommand'
import 'cypress-file-upload';

require('cypress-delete-downloads-folder').addCustomCommand();

declare global {
    interface Window {
        app: any;

    }
}

type CoordinateType = {x:number, y: number};

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
            openPrice: (isWait : boolean) => void,
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
            replaceGroove: (topDepth : string, width: string, horizontalDepth: string) => void
            removeSelectedGroove: () => void
            scaleElement: (horizontally: string, vertically: string, isProportional? : boolean, isPreserveArcs? : boolean) => void
            confirmationModal: (isConfirm: boolean) => void
            findSimilar: () => void
            checkProjectionFromAllView: (correctPoints : Array<string>) => void
            openFeedbackModal: () => void
            openTechSupportModal: () => void
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
            deleteSelected : () => void
            intersectSelected : () => void
            changeDimension : () => void
            checkDimensionInTheField : (field: string, dimension: string) => void
            changeQuantityInPrice: (quantity: string) => void
            openQuantityModal: () => void
            changeQuantityInModal: (value: string) => void
            openMachineModal: () => void
            machineModalSwitchTab: (tab: string) => void
            setNearEdgeSettings: (nearEdge? : object) => void
            redo: () => void
            cut: () => void
            undo: () => void
            copy: () => void
            paste: () => void
            openPreferencesModal: () => void
            openCalibrateModal: () => void
            openAndConfirmModelBends: () => void
            enableRotateMode: () => void
            nudgeLeft: () => void
            nudgeRight: () => void
            nudgeDown: () => void
            nudgeUp: () => void
            rotateRight: () => void
            rotateLeft: () => void
            canvasDrawing : (tool: string, coordinates: Array<CoordinateType>) => void
            saveDesign : () => void
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


export function canvasDrawing (tool: string, coordinates: Array<CoordinateType>) : void {
    cy.get(`[data-testId=${tool}]`).click();

    for (const coordinate of coordinates) {
        cy.get('canvas').click(coordinate.x, coordinate.y)
    }
}

export function deleteSelected() : void {
    cy.get('.sprite-Cancel').click();
}

export function intersectSelected() : void {
    cy.get('.sprite-Intersect').click();
}

export function changeDimension() : void {
    cy.get('.sprite-inch').click();
}

export function checkDimensionInTheField(field: string, dimension: string) : void {
    cy.get(field).invoke('val').then(text => {
        const res = text.toString().includes(dimension);
        expect(res).to.be.true;
    });}

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
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/contour`).as('contourResponse');
        cy.get('.MuiDialogActions-root > :nth-child(1)').click();
        cy.wait('@contourResponse');
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

export function openQuantityModal() : void {
    cy.get(':nth-child(4) > .btn-Material').click();
}

export function changeQuantityInModal(value : string) : void {
    cy.get('.Text > input').clear().type(value);
    cy.get('button').contains('Ok').click();
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
    cy.get('span[class=MuiButton-label]').contains('Detailed').click();
}

export function openMachineModal() : void {
    cy.get('.btn').contains('Line').click();
    cy.get('a').contains('Machine').click();
}

export function openPreferencesModal() : void {
    cy.get('#app > div > div.UpMenu > div > div.LeftButtonGroup > div.btn-group-other > button:nth-child(3)').click();
}

export function machineModalSwitchTab(tab: string) : void {
    cy.get(tab).click();
}

interface nearEdge {
    mode: string
    input: string
    inputValue: string
}

export function setNearEdgeSettings(nearEdge? : nearEdge) : void {
    if (nearEdge) {
        cy.get(nearEdge.mode).click();
        if (nearEdge.input) {
            cy.get(nearEdge.input).clear().type(nearEdge.inputValue)
        }
    }
}

export function addGroove(topDepth : string, width: string, horizontalDepth: string) : void {
    cy.get('.groove_data-inputs > :nth-child(1) > input').clear().type(topDepth);
    cy.get('.groove_data-inputs > :nth-child(2) > input').clear().type(width);
    cy.get('.groove_data-inputs > :nth-child(3) > input').clear().type(horizontalDepth);
    cy.get('.groove_control-panel > :nth-child(1)').click();
}

export function replaceGroove(topDepth : string, width: string, horizontalDepth: string) : void {
    cy.get('.groove_data-inputs > :nth-child(1) > input').clear().type(topDepth);
    cy.get('.groove_data-inputs > :nth-child(2) > input').clear().type(width);
    cy.get('.groove_data-inputs > :nth-child(3) > input').clear().type(horizontalDepth);
    cy.get('.groove_control-panel > :nth-child(2)').click();
}

export function removeSelectedGroove() : void {
    cy.get('button').contains('Remove').click();
}

export function openPrice(isWait = true ) {
    cy.wait(1000);
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/price`).as('priceResponse')
    cy.get('.sprite-Ok').click();
    if (isWait) {
        cy.wait('@priceResponse')
    }
}

export function changeQuantityInPrice(quantity: string) {
    cy.get('.InputNumber > input').clear().type(quantity);
    if (!Cypress.isBrowser('firefox')) {
        cy.realPress('Tab');
    }
    if (Cypress.isBrowser('firefox')) {
        cy.wait(3000);
    }
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

export function openTechSupportModal() : void {
    cy.get('.btn').contains('Help').click();
    cy.get('.sprite-techSupport').click();
}

export function openCalibrateModal() : void {
    cy.get('.nav > :nth-child(2)').click();
    cy.get('form > .MuiButton-root').click();
}

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

export function rotateLeft() : void {
    cy.get('.btn-LeftRotate').click();
}

export function rotateRight() : void {
    cy.get('.btn-RightRotate').click();
}

export function nudgeLeft() : void {
    cy.get('.btn-Left').click();
}

export function openAndConfirmModelBends() : void {
    cy.get('.btn').contains('View').click();
    cy.get('a').contains('Model Bends').click();

    cy.intercept('POST', `${Cypress.env('BACK_URL')}/bends`).as('bendResponse')
    cy.get('.Yes-No-buttons > :nth-child(1) > .MuiButton-label').click();
    cy.wait('@bendResponse')
}

export function sendFeedback(email : string, description : string) : void {
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

    cy.openPrice(true);

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

export function saveDesign() : void {
    cy.get('.btn').contains('File').click();
    cy.get('[data-testId=desktop-menu-item-save]').click();
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
Cypress.Commands.add('replaceGroove', replaceGroove)
Cypress.Commands.add('scaleElement', scaleElement)
Cypress.Commands.add('confirmationModal', confirmationModal)
Cypress.Commands.add('checkProjectionFromAllView', checkProjectionFromAllView)
Cypress.Commands.add('openFeedbackModal', openFeedbackModal)
Cypress.Commands.add('openTechSupportModal', openTechSupportModal)
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
Cypress.Commands.add('deleteSelected', deleteSelected)
Cypress.Commands.add('intersectSelected', intersectSelected)
Cypress.Commands.add('changeDimension', changeDimension)
Cypress.Commands.add('checkDimensionInTheField', checkDimensionInTheField)
Cypress.Commands.add('changeQuantityInPrice', changeQuantityInPrice)
Cypress.Commands.add('openQuantityModal', openQuantityModal)
Cypress.Commands.add('changeQuantityInModal', changeQuantityInModal)
Cypress.Commands.add('openMachineModal', openMachineModal)
Cypress.Commands.add('machineModalSwitchTab', machineModalSwitchTab)
Cypress.Commands.add('setNearEdgeSettings', setNearEdgeSettings)
Cypress.Commands.add('removeSelectedGroove', removeSelectedGroove)
Cypress.Commands.add('paste', paste)
Cypress.Commands.add('copy', copy)
Cypress.Commands.add('undo', undo)
Cypress.Commands.add('redo', redo)
Cypress.Commands.add('cut', cut)
Cypress.Commands.add('openPreferencesModal', openPreferencesModal)
Cypress.Commands.add('openCalibrateModal', openCalibrateModal)
Cypress.Commands.add('openAndConfirmModelBends', openAndConfirmModelBends)
Cypress.Commands.add('enableRotateMode', enableRotateMode)
Cypress.Commands.add('nudgeUp', nudgeUp)
Cypress.Commands.add('nudgeDown', nudgeDown)
Cypress.Commands.add('nudgeRight', nudgeRight)
Cypress.Commands.add('nudgeLeft', nudgeLeft)
Cypress.Commands.add('rotateRight', rotateRight)
Cypress.Commands.add('rotateLeft', rotateLeft)
Cypress.Commands.add('canvasDrawing', canvasDrawing)
Cypress.Commands.add('saveDesign', saveDesign)

//Corner
Cypress.Commands.add('cornerMath', corner.math)
Cypress.Commands.add('cornerCancelValue', corner.cancelValue)
Cypress.Commands.add('cornerConfirmValue', corner.confirmValue)
Cypress.Commands.add('cornerNegativeValue', corner.negativeValue)
Cypress.Commands.add('cornerPositiveValue', corner.positiveValue)
Cypress.Commands.add('cornerSymbolValue', corner.symbolValue)