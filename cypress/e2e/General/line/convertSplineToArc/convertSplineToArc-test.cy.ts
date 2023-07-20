describe('Convert Spline To Arc test', () => {

    beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test modal open message during request', () => {
         cy.openFile('./SimpleSpline.emsx');
         cy.selectAll();
         cy.openConvertSplineToArcModal();
         cy.get('.Yes-No-buttons > :nth-child(1)').click();
         cy.openConvertSplineToArcModal();
         cy.get('p').should('have.text', 'Please wait until the previous request is completed.');
     })

    it('Test with positive value', () => {
        cy.openFile('./SimpleSpline.emsx');
        cy.selectAll();
        cy.openConvertSplineToArcModal();
        cy.setConvertSplineToArcSettings('1');
        cy.confirmConvertSplineToArc();
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/SimpleSpline.emsx', 'cypress/fixtures/line/convertSpline/Convert_Spline_To_Arc_Correct.emsx')
    })

    it('Test with negative value, should appears error', () => {
        cy.openFile('./SimpleSpline.emsx');
        cy.selectAll();
        cy.openConvertSplineToArcModal();
        cy.setConvertSplineToArcSettings('-5');
        cy.confirmConvertSplineToArc(false);
        cy.get('[data-testid="tech-support-input-error"]').should('be.visible');
    })
 })