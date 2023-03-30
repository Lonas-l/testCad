declare global {
    interface Window {
        app: any;
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
        cy.changeView(views[i]);
        checkProjection(correctPoints[i]);
    }
}