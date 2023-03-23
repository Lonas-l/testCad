describe('Feedback', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
    })

    it('test width feedback modal', () => {
        cy.openFeedbackModal();
        cy.get('body > div.MuiDialog-root.techSupport > div.MuiDialog-container.MuiDialog-scrollPaper > div')
            .invoke('height').should('be.greaterThan', 525).and('be.lessThan',530)

    })

    it('test feedback positive', () => {
        cy.sendFeedback('kobane3467@fgvod.com', 'description description description')
        cy.get('.MuiPaper-root').contains('Thank you - we will reply shortly.').should('be.visible');
    })

    it('test feedback incorrect email', () => {
        cy.sendFeedback('qwe', 'description description description')
        cy.get('body > div.MuiDialog-root.techSupport > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.actions.MuiDialogActions-spacing > button:nth-child(1)').should('be.disabled');
    })

    it('test feedback incorrect description', () => {
        cy.sendFeedback('kobane3467@fgvod.com', ' ')
        cy.get('body > div.MuiDialog-root.techSupport > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.actions.MuiDialogActions-spacing > button:nth-child(1)').should('be.disabled');
    })
})