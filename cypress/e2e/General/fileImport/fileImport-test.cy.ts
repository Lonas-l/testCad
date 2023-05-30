describe('Import DXF', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Import DXF', () => {
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/import/dxf/info`).as('dxfInfoImportResponse')
        cy.openFile('./fileImport/File_Import_DXF.dxf');
        cy.wait('@dxfInfoImportResponse');
        cy.intercept('POST', `${Cypress.env('BACK_URL')}/import/dxf`).as('dxfImportResponse')
        cy.get('[style="background-color: rgb(221, 218, 218); box-shadow: rgb(0, 0, 0) 2px 2px 1px; margin-right: 5px;"]').click();
        cy.wait('@dxfImportResponse');
        cy.downloadDesign();
        cy.viewCompare('cypress/downloads/File_Import_DXF.emsx', 'cypress/fixtures/fileImport/File_Import_DXF_Correct.emsx')
    })
})