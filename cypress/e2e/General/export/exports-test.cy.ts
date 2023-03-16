describe('Export file', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
        cy.openFile('simpleRectangle.emsx');
    })
    
    it('Export to DXF', () => {
        cy.exportFile('dxf');
        cy.verifyDownload('simpleRectangle.dxf');
    })

    it('Export to STL', () => {
        cy.exportFile('stl');
        cy.verifyDownload('simpleRectangle.stl');
    })
})