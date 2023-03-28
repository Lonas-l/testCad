
describe('Import DXF', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
        cy.login();

    })
    //
    // it('Design is copied', () => {
    //     let designCount = 0;
    //     cy.get('.Designs').find('.item').then(item => {
    //         designCount = item.length;
    //     })
    //     cy.get('[data-testid="design-0-copy"] > .MuiIconButton-label').click();
    //
    //     cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse')
    //     cy.get('[data-testid="confirmation-ok"]').click();
    //     cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click();
    //     cy.wait('@getDesignsResponse')
    //
    //     cy.get('.Designs').find('.item').then(item => {
    //         console.log('item.length == ', item.length)
    //         console.log('designCount == ', designCount + 1)
    //         // expect(designCount  + 1).eq(item.length);
    //     })
    // })

    // it('Design is removed', () => {
    //     let designCount = 0;
    //     cy.get('.Designs').find('.item').then(item => {
    //         designCount = item.length;
    //     })
    //     cy.get('[data-testid="design-0-remove"] > .MuiIconButton-label').click();
    //
    //     cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse')
    //     cy.get('[data-testid="confirmation-ok"]').click();
    //     cy.wait('@getDesignsResponse')
    //
    //     cy.get('.Designs').find('.item').then(item => {
    //         //designCount = item.length;
    //         expect(designCount  + -1).eq(item.length);
    //     })
    // })
    //
    // it('Design is saved', () => {
    //     let designCount = 0;
    //     cy.get('.Designs').find('.item').then(item => {
    //         designCount = item.length;
    //     })
    //
    //     cy.canvasDrawing('toolbar-Rectangle', [{x: 100, y: 100}, {x: 200, y: 200}])
    //     cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse')
    //     cy.saveDesign();
    //     cy.wait('@getDesignsResponse')
    //     cy.get('.Designs').find('.item').then(item => {
    //         expect(designCount + 1).eq(item.length);
    //     })
    // })

    it('Design is saved', () => {

        cy.get('[data-testid="design-0-file-name"]').click()

    })
})