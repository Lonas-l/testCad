declare global {
    interface Window {
        app: any;
    }
}

export function checkProjection(correctPoint : string) : void {
    cy.wait(50);
    cy.window().then( async win => {
        const projections = await win.app.workspace.projections;
        const arrProjection: Array<string> = [];
        for (let projection of projections) {
            const extremes = projection.projectionShape.extremum;
            arrProjection.push(extremes.maxX.toFixed(5), extremes.maxY.toFixed(5), extremes.minX.toFixed(5), extremes.minY.toFixed(5));
        }

        const stringProjection: string = arrProjection.join('');
        expect(correctPoint).to.eq(stringProjection);
    })
}

export function checkProjectionFromAllView(correctPoints : Array<string> ) : void {
    const views: Array<string> = [
        'bot-panel-Top-view',
        'bot-panel-Right-view',
        'bot-panel-Left-view',
        'bot-panel-Front-view',
        'bot-panel-Back-view',
        'bot-panel-Bottom-view'
    ];
    for (let i : number = 0; i < correctPoints.length; i++) {
        if (correctPoints[i] === '') {
            continue;
        }
        cy.changeView(views[i]);
        checkProjection(correctPoints[i]);
    }
}