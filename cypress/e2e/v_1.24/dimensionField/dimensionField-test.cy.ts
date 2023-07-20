describe('TR #202239 | Bug | Z-Value', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Max thread depth is not calculated by formulas', () => {
        cy.openFile('../e2e/v_1.24/dimensionField/designs/TR202239/TR202239_Two_Threads.emsx');
        cy.selectAll();
        for (let i=0; i <=5; i++) {
            cy.changeZ('numeric-Z-0', true);
            cy.changeZ('numeric-Z-13', true);
        }
        cy.get('body').type('{enter}');
        cy.get('[data-testid="numeric-Z"]').should('have.value', '0.250"');
        cy.get('[data-testid="thread-depth"]').should('have.value', 'Max(0.225")');
    })

    it('Thread has Z value and we can change it without errors', () => {
        cy.openFile('./SimpleThread.emsx');
        cy.selectAll();
        cy.changeZ('100', false);
    })

    it('We can change Z value for selected thread and some element', () => {
        cy.openFile('./SimpleThread.emsx');
        cy.canvasDrawing('toolbar-Rectangle', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.selectAll();
        cy.changeZ('100', false);
    })
})

describe('TR #202209 | Bug | Max Thread Depth', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('After no changing thread depth, i get an error', () => {
        cy.openFile('../e2e/v_1.24/dimensionField/designs/TR202209/TR202209_Max_Thread_Depth.emsx');
        cy.changeView('bot-panel-Front-view');
        cy.canvasClick([{x: 400, y: 240}]);
        cy.get('[data-testid="thread-depth"]').click();
        cy.get('[data-testid="thread-depth-0"]').click();
        cy.get('[data-testid="Information-dialog"]').should('not.exist');

    })
})


describe('TR #202212 | Bug | Thread Depth Field', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('If we selected 3 similar thread circles, thread depth field will be empty', () => {
        cy.openFile('../e2e/v_1.24/dimensionField/designs/TR202212/TR202212_Thread_Depth.emsx');
        cy.selectAll();
        cy.get('[data-testid="thread-depth"]').should('have.value', 'Max(0.984")');
    })
})


describe('TR #202231 | Bug | Thread Depth Field', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('We can\'t set value to 0', () => {
        cy.openFile('../e2e/v_1.24/dimensionField/designs/TR202212/TR202212_Thread_Depth.emsx');
        cy.selectAll();
        cy.get('[data-testid="thread-depth"]').focus().clear().type('0');
        cy.get('body').type('{enter}');
        cy.selectAll();
        cy.get('[data-testid="thread-depth"]').should('have.value', '0');
    })
})
