describe('TR #202430 | Bug | Line Machine', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('If we imported design via drag and drop, while line machine modal is opened, we get an error', () => {
        cy.openFile('SimpleRectangle.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.openFile('SimpleCircle.emsx');
    })
})

describe('TR #202081 | Bug | Line | Machine | Tolerance', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Can\'t change line machine to tolerance for circle', () => {
        cy.openFile('SimpleCircle.emsx');
        cy.selectAll();
        cy.openMachineModal();
        cy.get('[data-testid="line-machine-Tolerance"]').click();
        cy.get('[data-testid="line-machine-ok"]').should('not.be.disabled').click();
        cy.get('[data-testid="select-Tolerance"]').should('be.visible');
    })

    it('Can\'t change line machine to tolerance for circle and line', () => {
        cy.openFile('SimpleCircle.emsx');
        cy.canvasDrawing('toolbar-Line', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.selectAll();
        cy.openMachineModal();
        cy.get('[data-testid="line-machine-Tolerance"]').click();
        cy.get('[data-testid="line-machine-ok"]').should('not.be.disabled').click();
        cy.get('[data-testid="select-Tolerance"]').should('be.visible');
    })

    it('Can\'t change line machine to tolerance for grouped several elements', () => {
        cy.openFile('SimpleCircle.emsx');
        cy.canvasDrawing('toolbar-Line', [{x: 100, y: 100}, {x: 200, y: 200},]);
        cy.selectAll();
        cy.group();
        cy.openMachineModal();
        cy.get('[data-testid="line-machine-Tolerance"]').click();
        cy.get('[data-testid="line-machine-ok"]').should('not.be.disabled').click();
        cy.get('[data-testid="select-Tolerance"]').should('be.visible');
    })
})

describe('TR #202178 | Bug | Line | Machine', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('I can\'t open line machine for shape in bot view', () => {
        cy.openFile('../e2e/v_1.24/line/machine/designs/TR202178/TR202178_Line_Machine.emsx');
        cy.changeView('bot-panel-Bottom-view');
        cy.canvasClick([{x : 360, y : 100}]);
        cy.openMachineModal();
        cy.get('.preview').should('be.visible');
    })

})

// TODO Нужно доделать, после фикса регрешена, который фиксит ошибку в сайд воле
// describe('TR #201276 | Critical error | Line | Machine | Side Wall', () => {
//
//     beforeEach(() => {
//         cy.deleteDownloadsFolder();
//         cy.visit(`${Cypress.env('FRONT_URL')}`);
//     })
//
//     it('After setting the side wall to 0.001-0.009 degrees, I get an error.', () => {
//         cy.openFile('SimpleCircle.emsx');
//         cy.selectAll();
//         cy.openMachineModal();
//
//         cy.get('[data-testid="side-wall-angle"]').focus().clear().type('0.001');
//         cy.get('.preview').click();
//     })
//
// })