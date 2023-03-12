describe('Export file', () => {

    beforeEach(() => {
        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/ozlGgdplD0JDiJXGwd9mPRgKbQtDkdUNop8Qe5Fa`)
    })
    
    it('Export to DXF', () => {
        cy.exportFile('dxf')
        cy.verifyDownload('Untitled.dxf');
    })

    it('Export to STL', () => {
        cy.exportFile('stl');
        cy.verifyDownload('Untitled.stl');
    })
})