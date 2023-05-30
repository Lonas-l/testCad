
interface nearEdge {
    mode: string
    input: string
    inputValue: string
}

export function openLineDropdown() : void {
    cy.get('[data-testid="desktop-show-dropdown-Line"]').click();
}

//Mirror

export function mirror(mode: string) : void {
    cy.openLineDropdown();
    cy.get('a').contains('Mirror').trigger('mouseover');

    if (mode == 'horizontally') {
        cy.get('a').contains('Horizontally').click();
    }

    if (mode == 'vertically') {
        cy.get('a').contains('Vertically').click();
    }
}

// Tangent

export function tangent() : void {
    cy.openLineDropdown();
    cy.get('[data-testid="desktop-menu-item-tangents"]').click();
}

//Select Connected

export function selectConnected() : void {
    cy.openLineDropdown();
    cy.get('[data-testid="desktop-menu-item-select-connected"]').click();
}

//Scale
export function scaleElement(horizontally: string, vertically: string, isProportional? : boolean, isPreserveArcs? : boolean) : void {
    cy.openLineDropdown();
    cy.get('[data-testid="desktop-menu-item-scale..."]').click();

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

//Contour

export function openContourModal() : void {
    cy.openLineDropdown();
    cy.get('[data-testid="desktop-menu-item-contour"]').click();
}

export function setContourSettings(value: string, isOutside : boolean, isInside: boolean, isRound: boolean) : void {
    cy.get('[data-testid="contour-window-distance"]').clear().type(value);

    if (!isInside) {
        cy.get('[data-testid="contour-window-form-control-inside"]').click()
    }
    if (!isOutside) {
        cy.get('[data-testid="contour-window-form-control-outside"]').click()
    }
    if (!isRound) {
        cy.get('[data-testid="contour-window-form-control-round"]').click()
    }
}

export function confirmContour(isWait: boolean) : void {
    if (isWait) {
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/contour`).as('contourResponse');
        cy.get('[data-testid="contour-window-ok"]').click();
        cy.wait('@contourResponse');
    } else {
        cy.get('[data-testid="contour-window-ok"]').click();
    }
}

//Divide

export function openDivideModal() : void {
    cy.openLineDropdown();
    cy.get('a').contains('Divide').click();
}

export function setDivideSettings(value : string) : void {
    cy.get('.Text > input').clear().type(value);
}

export function confirmDivide() : void {
    cy.get('[style="background-color: rgb(221, 218, 218); box-shadow: rgb(0, 0, 0) 2px 2px 1px; margin: 0px 5px 0px auto;"]').click();
}

export function cancelDivide() : void {
    cy.get('[style="background-color: rgb(221, 218, 218); box-shadow: rgb(0, 0, 0) 2px 2px 1px; margin: 0px auto;"]').click();
}

// Convert Spline To Arc

export function openConvertSplineToArcModal() : void {
    cy.openLineDropdown();
    cy.get('a').contains('Convert Splines to Arcs').click();
}


export function setConvertSplineToArcSettings(value: string) : void {
    cy.get('.Text > div > input').clear().type(value);
}

export function confirmConvertSplineToArc() : void {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/line/spline-to-arcs`).as('splineToArcResponse')
    cy.get('.Yes-No-buttons > :nth-child(1)').click();
    cy.wait('@splineToArcResponse')

}

// Simplify

export function openSimplifyModal() : void {
    cy.openLineDropdown();
    cy.get('a').contains('Simplify...').click();
}

// Machine

export function openMachineModal() : void {
    cy.openLineDropdown();
    cy.get('[data-testid="desktop-menu-item-machine"]').click();
}


export function machineModalSwitchTab(tab: string) : void {
    cy.get(tab).click();
}


export function setNearEdgeSettings(nearEdge? : nearEdge) : void {
    if (nearEdge) {
        cy.get(nearEdge.mode).click();
        if (nearEdge.input) {
            cy.get(nearEdge.input).clear().type(nearEdge.inputValue)
        }
    }
}

// Machine Groove
export function openGrooveModal() : void {
    cy.get('span[class=MuiButton-label]').contains('Detailed').click();
}

export function addGroove(topDepth : string, width: string, horizontalDepth: string) : void {
    cy.get('[data-testid="groove-top-depth"]').clear().type(topDepth);
    cy.get('[data-testid="groove-width"]').clear().type(width);
    cy.get('[data-testid="groove-horizontal-depth"]').clear().type(horizontalDepth);
    cy.get('[data-testid="groove-add"]').click();
}

export function replaceGroove(topDepth : string, width: string, horizontalDepth: string) : void {
    cy.get('[data-testid="groove-top-depth"]').clear().type(topDepth);
    cy.get('[data-testid="groove-width"]').clear().type(width);
    cy.get('[data-testid="groove-horizontal-depth"]').clear().type(horizontalDepth);
    cy.get('[data-testid="groove-replace"]').click();
}

export function removeSelectedGroove() : void {
    cy.get('[data-testid="groove-remove"]').click();
}
