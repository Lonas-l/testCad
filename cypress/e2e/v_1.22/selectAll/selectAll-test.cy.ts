 describe('Critical error | Edit | Select All', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('2270 After select all, i get an error in console.', () => {
        cy.openFile('../e2e/v_1.22/selectAll/designs/2270/Select_All_Error.emsx');
        cy.selectAll();
    })

     it('2261 After select all, i get an error in console.', () => {
         cy.openFile('../e2e/v_1.22/selectAll/designs/2261/Select_All_Error.emsx');
         cy.selectAll();
     })
})