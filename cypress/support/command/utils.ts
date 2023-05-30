declare global {
    interface CoordinateType {
        x:number,
        y: number
    }
}

export function canvasDrawing (tool: string, coordinates: Array<CoordinateType>) : void {
    cy.get(`[data-testId=${tool}]`).click();

    for (const coordinate of coordinates) {
        cy.get('canvas').click(coordinate.x, coordinate.y)
    }
}

export function canvasClick (coordinates: Array<CoordinateType>) : void {
    for (const coordinate of coordinates) {
        cy.get('canvas').click(coordinate.x, coordinate.y)
    }
}

export function changeZ(zValue : string) : void {
    cy.get('[data-testid="numeric-Z"]').clear().type(zValue);
}

export function downloadDesign() : void {
    cy.get('[data-testid="desktop-up-menu-download"] > .sprite').click();
}

export function isPreviewOpened() : void {
    cy.intercept('POST', `${Cypress.env('BACK_URL')}/meshes`).as('previewResponse')
    cy.get('[data-testid="desktop-up-menu-3d"]').click();
    cy.wait('@previewResponse');
    cy.get('.popup-container').should('be.visible');
}

export function changeView(view: string) : void {
    cy.wait(100)
    cy.get(view).click();
}

export function openFile(path: string) : void {
    cy.get('canvas').attachFile(path, { subjectType: 'drag-n-drop' });
}

export function openFileAndUseSolution (solution: string, initialDesignUrl: string, fixedDesignUrl: string, downloadedDesignUrl: string) : void {
    cy.openFile(initialDesignUrl)
    cy.wait(10);
    cy.get('[data-testid="desktop-up-menu-3d"]').click();
    cy.get(`${solution}`).click();
    cy.get('span[class=MuiButton-label]').contains('OK').click();
    cy.downloadDesign();
    cy.viewCompare(downloadedDesignUrl, fixedDesignUrl);
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