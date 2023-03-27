describe('Bottom Panel', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })
    
    it('Filename Label When creating a new file and entering a new name, it is ' +
        'should displayed at the bottom left panel', () => {
        cy.get(':nth-child(1) > .btn').click();
        cy.get('ul > :nth-child(1)').click();
        cy.get('[style="background-color: rgb(221, 218, 218); box-shadow: rgb(0, 0, 0) 2px 2px 1px; margin: 0px auto;"]').click();
        cy.get('.Text > :nth-child(1) > input').clear().type('New File Name');
        cy.get('.button-ok').click();
        cy.get('.fileNameLabel').should('have.text', 'New File Name')
    })

    it('View switch between from bottom pane\n', () => {
        cy.changeView('.leftData > :nth-child(3)')
        cy.get('.leftData > :nth-child(3)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(4)')
        cy.get('.leftData > :nth-child(4)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(5)')
        cy.get('.leftData > :nth-child(5)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(6)')
        cy.get('.leftData > :nth-child(6)').should('have.class', 'active');

        cy.changeView('.leftData > :nth-child(7)')
        cy.get('.leftData > :nth-child(7)').should('have.class', 'active');
    })

})