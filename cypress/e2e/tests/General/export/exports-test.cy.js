describe('Export file', () => {

    beforeEach(() => {
        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/ozlGgdplD0JDiJXGwd9mPRgKbQtDkdUNop8Qe5Fa`)
    })
    
    it('Export to DXF', () => {
        cy.export('dxf')
        cy.verifyDownload('Untitled.dxf');
    })

    it('Export to STL', () => {
        cy.export('stl');
        cy.verifyDownload('Untitled.stl');
    })
})