// Wait merge task, need to do this test
// describe('TR #199283 | Bug | 3D Preview', () => {
//
//     beforeEach(() => {
//         cy.deleteDownloadsFolder();
//         cy.visit(`${Cypress.env('FRONT_URL')}`);
//     })
//
//     it('3D preview is opened without errors', () => {
//         cy.openFile('../e2e/v_1.24/dimensionField/designs/TR202239/TR202239_Two_Threads.emsx');
//         cy.selectAll();
        for (let i=0; i <=5; i++) {
            cy.changeZ('numeric-Z-0', true);
            cy.changeZ('numeric-Z-13', true);
        }
//         cy.realPress('Enter');
//         cy.get('[data-testid="numeric-Z"]').should('have.value', 'Thru');
//         // cy.get('[data-testid="thread-depth"]').should('have.value', 'Thru');
//     })
// })
